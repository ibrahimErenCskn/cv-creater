import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/prisma/prismaInstance';

// Add skill to a CV
export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    
    // Check if user is authenticated
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const data = await request.json();
    const { cvId, name, level, category } = data;
    
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
    
    // Create the skill entry
    const skill = await prisma.skill.create({
      data: {
        name,
        level: level || 0,
        category,
        cvId,
      },
    });
    
    return NextResponse.json({ success: true, skill }, { status: 201 });
  } catch (error) {
    console.error('Error adding skill:', error);
    return NextResponse.json({ error: 'Failed to add skill' }, { status: 500 });
  }
}

// Delete a skill entry
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
      return NextResponse.json({ error: 'Skill ID is required' }, { status: 400 });
    }
    
    // Verify the skill entry belongs to the user's CV
    const skill = await prisma.skill.findFirst({
      where: {
        id,
        cv: {
          userId: session.user.id as string,
        },
      },
    });
    
    if (!skill) {
      return NextResponse.json({ error: 'Skill not found or access denied' }, { status: 404 });
    }
    
    // Delete the skill entry
    await prisma.skill.delete({
      where: {
        id,
      },
    });
    
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error deleting skill:', error);
    return NextResponse.json({ error: 'Failed to delete skill' }, { status: 500 });
  }
}
 