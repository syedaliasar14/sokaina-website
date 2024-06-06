import fs from 'fs';
import path from 'path';
import Image from 'next/image';

interface ProjectsGridProps {
  folderName: string;
}

export default function ProjectsGrid ({folderName}: ProjectsGridProps) {
  const imagesDirectory = path.join(process.cwd(), `public/${folderName}`);
  const imageFileNames = fs.readdirSync(imagesDirectory);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      {imageFileNames.map((fileName, index) => (
        <div key={index} className="relative overflow-hidden flex justify-center align-items w-[300px] h-[300px] mb-10">
          <Image
            className="object-cover"
            src={`/${folderName}/${fileName}`}
            alt={`Image ${index + 1}`}
            width={300}
            height={300}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
};
