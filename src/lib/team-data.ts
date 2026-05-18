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
    nameAr: "عبدالله الجهوري",
    nameEn: "Abdullah Al Johwari",
    roleAr: "المؤسس والرئيس التنفيذي",
    roleEn: "Founder & CEO",
    bioAr: "رائد أعمال عماني بخبرة 10+ سنوات في إدارة التكنولوجيا والعقارات. مؤسس رافد لتطوير حلول إدارة المرافق والعقارات.",
    bioEn: "Omani entrepreneur with 10+ years of experience in technology and property management. Founder of Rafid to revolutionize facilities management.",
    email: "abdullah.j@creativetechno.net",
    phone: "+968 9297 5614",
    image: "https://media.licdn.com/dms/image/v2/C5603AQEIBfTX90T1-w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516781386749?e=1780531200&v=beta&t=eEV6nohDNojBKIDMpiC-1tmrMa7Tp6x70n5QvFIvQ7g",
    department: "Leadership",
    yearsExperience: 10,
    social: {
      linkedin: "#",
      email: "abdullah.j@creativetechno.net",
    },
  },
];
