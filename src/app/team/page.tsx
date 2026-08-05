import type { Metadata } from 'next';
import TeamPageClient from './client';

export const metadata: Metadata = {
  title: 'فريقنا | Our Team',
  description: 'تعرّف على الفريق الذي يقف خلف رافد — نظام إدارة المرافق والعقارات العُماني.',
  alternates: { canonical: 'https://www.rafidsystem.com/team' },
};

export default function TeamPage() {
  return <TeamPageClient />;
}
