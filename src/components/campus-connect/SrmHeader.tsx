export function SrmHeader() {
  return (
    <div className="text-center py-8">
      <div className="flex items-center justify-center gap-4">
        <svg
          className="h-16 w-16 text-primary"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M50,5A10,10,0,0,0,40,15V85A10,10,0,0,0,50,95A10,10,0,0,0,60,85V15A10,10,0,0,0,50,5Z" />
          <path d="M25,30A5,5,0,0,0,20,35V65A5,5,0,0,0,25,70H75A5,5,0,0,0,80,65V35A5,5,0,0,0,75,30H25ZM50,40A10,10,0,1,1,40,50,10,10,0,0,1,50,40Z" />
          <circle cx="50" cy="50" r="8" />
        </svg>
        <h1 className="text-6xl font-extrabold font-headline tracking-tight text-primary">
          SRMIST
        </h1>
      </div>
      <p className="mt-2 text-lg text-muted-foreground">Kattankulathur Campus</p>
    </div>
  );
}
