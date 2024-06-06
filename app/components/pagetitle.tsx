interface PageTitleProps {
  title: string;
}

export default function PageTitle({title}: PageTitleProps) {
  return(
    <div className="relative py-8 uppercase text-4xl sm:text-5xl text-center">
      {title}
    </div>
  );
}