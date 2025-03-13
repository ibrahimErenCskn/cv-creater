import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/prisma/prismaInstance';

// Add education to a CV
export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    
    // Check if user is authenticated
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const data = await request.json();
    const { cvId, institution, degree, field, startDate, endDate, description, location, gpa } = data;
    
    // Verify the CV belongs to the user
    const cv = await prisma.cV.findFirst({
      where: {
        id: cvId,
        userId: session.user.id as string,
      },
    });
    
    if (!cv) {
      return NextResponse.json({ error: 'CV not found or access denied' }, { status: 404 });
    }
    
    // Create the education entry
    const education = await prisma.education.create({
      data: {
        institution,
        degree,
        field,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
        description,
        location,
        gpa,
        cvId,
      },
    });
    
    return NextResponse.json({ success: true, education }, { status: 201 });
  } catch (error) {
    console.error('Error adding education:', error);
    return NextResponse.json({ error: 'Failed to add education' }, { status: 500 });
  }
}

// Delete an education entry
export async function DELETE(request: NextRequest) {
  try {
    const session = await auth();
    
    // Check if user is authenticated
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Education ID is required' }, { status: 400 });
    }
    
    // Verify the education entry belongs to the user's CV
    const education = await prisma.education.findFirst({
      where: {
        id,
        cv: {
          userId: session.user.id as string,
        },
      },
    });
    
    if (!education) {
      return NextResponse.json({ error: 'Education not found or access denied' }, { status: 404 });
    }
    
    // Delete the education entry
    await prisma.education.delete({
      where: {
        id,
      },
    });
    
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error deleting education:', error);
    return NextResponse.json({ error: 'Failed to delete education' }, { status: 500 });
  }
} 