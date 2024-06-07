import ProjectsGrid from '../components/projectsgrid';
import PageTitle from '../components/pagetitle';

export default function Architecture() {
  return (
    <main className="flex flex-col flex-grow items-center w-full">
      <PageTitle title="architecture" />
      <ProjectsGrid folderName="architecture" />
    </main>
  );
}