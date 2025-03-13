import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/prisma/prismaInstance';

// Create a new CV
export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    
    // Check if user is authenticated
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const userId = session.user.id as string;
    const data = await request.json();
    
    // Create the CV
    const cv = await prisma.cV.create({
      data: {
        title: data.title || 'Untitled CV',
        summary: data.summary,
        template: data.template || 'standard',
        primaryColor: data.primaryColor || '#3B82F6',
        userId: userId,
      },
    });
    
    return NextResponse.json({ success: true, cv }, { status: 201 });
  } catch (error) {
    console.error('Error creating CV:', error);
    return NextResponse.json({ error: 'Failed to create CV' }, { status: 500 });
  }
}

// Get all CVs for the current user
export async function GET() {
  try {
    const session = await auth();
    
    // Check if user is authenticated
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const userId = session.user.id as string;
    
    // Get all CVs for the user
    const cvs = await prisma.cV.findMany({
      where: {
        userId: userId,
      },
      include: {
        educations: true,
        experiences: true,
        skills: true,
        projects: true,
        languages: true,
        contact: true,
      },
      orderBy: {
        updatedAt: 'desc',
      },
    });
    
    return NextResponse.json({ cvs }, { status: 200 });
  } catch (error) {
    console.error('Error fetching CVs:', error);
    return NextResponse.json({ error: 'Failed to fetch CVs' }, { status: 500 });
  }
} 