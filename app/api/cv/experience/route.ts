import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/prisma/prismaInstance';

// Add experience to a CV
export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    
    // Check if user is authenticated
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const data = await request.json();
    const { cvId, company, position, startDate, endDate, current, description, location } = data;
    
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
    
    // Create the experience entry
    const experience = await prisma.experience.create({
      data: {
        company,
        position,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
        current: current || false,
        description,
        location,
        cvId,
      },
    });
    
    return NextResponse.json({ success: true, experience }, { status: 201 });
  } catch (error) {
    console.error('Error adding experience:', error);
    return NextResponse.json({ error: 'Failed to add experience' }, { status: 500 });
  }
}

// Delete an experience entry
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
      return NextResponse.json({ error: 'Experience ID is required' }, { status: 400 });
    }
    
    // Verify the experience entry belongs to the user's CV
    const experience = await prisma.experience.findFirst({
      where: {
        id,
        cv: {
          userId: session.user.id as string,
        },
      },
    });
    
    if (!experience) {
      return NextResponse.json({ error: 'Experience not found or access denied' }, { status: 404 });
    }
    
    // Delete the experience entry
    await prisma.experience.delete({
      where: {
        id,
      },
    });
    
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error deleting experience:', error);
    return NextResponse.json({ error: 'Failed to delete experience' }, { status: 500 });
  }
} 