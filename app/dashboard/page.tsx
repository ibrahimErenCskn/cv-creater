import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await auth();
  
  // Kullanıcı giriş yapmamışsa ana sayfaya yönlendir
  if (!session || !session.user) {
    redirect("/");
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">CV'lerim</h1>
          <p className="mt-2 text-gray-600">Mevcut CV'lerinizi yönetin veya yeni bir CV oluşturun.</p>
        </div>
        
        {/* CV Oluştur Butonu */}
        <div className="mb-10">
          <Link 
            href="/dashboard/create" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Yeni CV Oluştur
          </Link>
        </div>
        
        {/* CV Listesi - Henüz CV yok */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-10 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Henüz CV'niz Bulunmuyor</h3>
            <p className="mt-2 text-gray-500">
              Profesyonel bir CV oluşturmak için "Yeni CV Oluştur" butonuna tıklayın.
            </p>
            <div className="mt-6">
              <Link 
                href="/dashboard/create" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Hemen Başla
              </Link>
            </div>
          </div>
        </div>
        
        {/* CV Listesi - Örnek (Gerçek uygulamada veritabanından çekilecek) */}
        {/* 
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {cvs.map((cv) => (
              <li key={cv.id} className="p-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{cv.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">Son güncelleme: {new Date(cv.updatedAt).toLocaleDateString()}</p>
                  </div>
                  <div className="flex space-x-3">
                    <Link 
                      href={`/dashboard/edit/${cv.id}`}
                      className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Düzenle
                    </Link>
                    <Link 
                      href={`/dashboard/preview/${cv.id}`}
                      className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Önizle
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        */}
      </div>
    </div>
  );
}