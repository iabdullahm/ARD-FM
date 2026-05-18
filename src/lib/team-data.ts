export interface TeamMember {
  id: string;
  nameAr: string;
  nameEn: string;
  roleAr: string;
  roleEn: string;
  bioAr: string;
  bioEn: string;
  email: string;
  phone?: string;
  image: string;
  department: string;
  yearsExperience: number;
  social?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    nameAr: "عبدالله الجهواري",
    nameEn: "Abdullah Al Jahwari",
    roleAr: "المؤسس والرئيس التنفيذي",
    roleEn: "Founder & CEO",
    bioAr: "رائد أعمال عماني بخبرة 10+ سنوات في إدارة التكنولوجيا والعقارات. مؤسس رافد لتطوير حلول إدارة المرافق والعقارات.",
    bioEn: "Omani entrepreneur with 10+ years of experience in technology and property management. Founder of Rafid to revolutionize facilities management.",
    email: "abdullah.j@creativetechno.net",
    phone: "+968 9297 5614",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
    department: "Leadership",
    yearsExperience: 10,
    social: {
      linkedin: "#",
      email: "abdullah.j@creativetechno.net",
    },
  },
];
