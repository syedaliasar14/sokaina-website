import ProjectsGrid from '../components/projectsgrid';
import PageTitle from '../components/pagetitle';

export default function FineArt() {
  return (
    <main className="flex flex-col flex-grow items-center w-full">
      <PageTitle title="fine art" />
      <ProjectsGrid folderName="fineart" />
    </main>
  );
}