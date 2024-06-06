import ProjectsGrid from '../components/projectsgrid';
import PageTitle from '../components/pagetitle';

export default function Neuroscience() {
  return (
    <main className="flex flex-col flex-grow items-center justify-between">
      <PageTitle title="neuroscience" />
      <ProjectsGrid folderName="neuroscience" />
    </main>
  );
}