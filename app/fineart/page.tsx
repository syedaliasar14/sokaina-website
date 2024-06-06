import fs from 'fs';
import path from 'path';
import Image from 'next/image';

export default function FineArt() {
  const imagesDirectory = path.join(process.cwd(), 'public/fineart');
  const imageFileNames = fs.readdirSync(imagesDirectory);

  return (
    <main className="flex flex-col flex-grow items-center justify-between">
      <div className="py-8 uppercase text-3xl sm:text-5xl">
        fine art
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {imageFileNames.map((fileName: any, index: any) => (
          <div key={index} className="relative overflow-hidden flex justify-center align-items w-[300px] h-[300px]">
            <Image
              className="object-cover"
              src={`/fineart/${fileName}`}
              alt={`Image ${index + 1}`}
              width={300}
              height={300}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </main>
  );
}