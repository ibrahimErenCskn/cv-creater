// API utility functions for CV operations

// Create a new CV
export async function createCV(data: any) {
  const response = await fetch('/api/cv', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error('Failed to create CV');
  }
  
  return response.json();
}

// Get all CVs for the current user
export async function getCVs() {
  const response = await fetch('/api/cv');
  
  if (!response.ok) {
    throw new Error('Failed to fetch CVs');
  }
  
  return response.json();
}

// Add education to a CV
export async function addEducation(data: any) {
  const response = await fetch('/api/cv/education', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error('Failed to add education');
  }
  
  return response.json();
}

// Delete an education entry
export async function deleteEducation(id: string) {
  const response = await fetch(`/api/cv/education?id=${id}`, {
    method: 'DELETE',
  });
  
  if (!response.ok) {
    throw new Error('Failed to delete education');
  }
  
  return response.json();
}

// Add experience to a CV
export async function addExperience(data: any) {
  const response = await fetch('/api/cv/experience', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error('Failed to add experience');
  }
  
  return response.json();
}

// Delete an experience entry
export async function deleteExperience(id: string) {
  const response = await fetch(`/api/cv/experience?id=${id}`, {
    method: 'DELETE',
  });
  
  if (!response.ok) {
    throw new Error('Failed to delete experience');
  }
  
  return response.json();
}

// Add skill to a CV
export async function addSkill(data: any) {
  const response = await fetch('/api/cv/skill', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error('Failed to add skill');
  }
  
  return response.json();
}

// Delete a skill entry
export async function deleteSkill(id: string) {
  const response = await fetch(`/api/cv/skill?id=${id}`, {
    method: 'DELETE',
  });
  
  if (!response.ok) {
    throw new Error('Failed to delete skill');
  }
  
  return response.json();
}

// Add language to a CV
export async function addLanguage(data: any) {
  const response = await fetch('/api/cv/language', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error('Failed to add language');
  }
  
  return response.json();
}

// Delete a language entry
export async function deleteLanguage(id: string) {
  const response = await fetch(`/api/cv/language?id=${id}`, {
    method: 'DELETE',
  });
  
  if (!response.ok) {
    throw new Error('Failed to delete language');
  }
  
  return response.json();
} 