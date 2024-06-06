import ProjectsGrid from '../components/projectsgrid';
import PageTitle from '../components/pagetitle';

export default function Architecture() {
  return (
    <main className="flex flex-col flex-grow items-center justify-between">
      <PageTitle title="architecture" />
      <ProjectsGrid folderName="architecture" />
    </main>
  );
}