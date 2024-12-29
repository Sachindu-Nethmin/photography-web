export default function Gallery(){
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="grid gap-8 transform transition-all hover:scale-105">
            <div className="bg-white p-2 rounded-xl shadow-lg">
              <img 
                className="h-auto w-full rounded-lg" 
                src="/photography-web/images/r1.png" 
                alt="Logo" 
              />
            </div>
            // ...repeat for other images
          </div>
        </div>
      </div>
    </div>
  );
}