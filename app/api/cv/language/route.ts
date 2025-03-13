import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/prisma/prismaInstance';

// Add language to a CV
export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    
    // Check if user is authenticated
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const data = await request.json();
    const { cvId, name, proficiency } = data;
    
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
    
    // Create the language entry
    const language = await prisma.language.create({
      data: {
        name,
        proficiency,
        cvId,
      },
    });
    
    return NextResponse.json({ success: true, language }, { status: 201 });
  } catch (error) {
    console.error('Error adding language:', error);
    return NextResponse.json({ error: 'Failed to add language' }, { status: 500 });
  }
}

// Delete a language entry
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
      return NextResponse.json({ error: 'Language ID is required' }, { status: 400 });
    }
    
    // Verify the language entry belongs to the user's CV
    const language = await prisma.language.findFirst({
      where: {
        id,
        cv: {
          userId: session.user.id as string,
        },
      },
    });
    
    if (!language) {
      return NextResponse.json({ error: 'Language not found or access denied' }, { status: 404 });
    }
    
    // Delete the language entry
    await prisma.language.delete({
      where: {
        id,
      },
    });
    
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error deleting language:', error);
    return NextResponse.json({ error: 'Failed to delete language' }, { status: 500 });
  }
} 