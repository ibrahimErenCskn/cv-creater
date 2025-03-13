import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function CreateCVPage() {
  const session = await auth();
  
  // Kullanıcı giriş yapmamışsa ana sayfaya yönlendir
  if (!session || !session.user) {
    redirect("/");
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Yeni CV Oluştur</h1>
            <Link 
              href="/dashboard" 
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Geri Dön
            </Link>
          </div>
          <p className="mt-2 text-gray-600">Yeni bir CV oluşturmak için aşağıdaki şablonlardan birini seçin.</p>
        </div>
        
        {/* Şablon Seçimi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Şablon 1 - Standard */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:border-blue-500 transition-colors cursor-pointer group">
            <div className="h-64 bg-gray-100 relative">
              <div className="absolute inset-0 flex flex-col p-6 bg-white">
                <div className="h-10 bg-blue-600 w-full rounded-sm mb-4"></div>
                <div className="flex">
                  <div className="w-1/3 pr-4">
                    <div className="h-8 bg-gray-200 rounded-sm mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded-sm mb-2 w-2/3"></div>
                    <div className="h-4 bg-gray-200 rounded-sm mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded-sm mb-2 w-3/4"></div>
                    <div className="h-8 bg-gray-200 rounded-sm mt-4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded-sm mb-2 w-2/3"></div>
                  </div>
                  <div className="w-2/3">
                    <div className="h-8 bg-gray-200 rounded-sm mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded-sm mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded-sm mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded-sm mb-2"></div>
                    <div className="h-8 bg-gray-200 rounded-sm mt-4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded-sm mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded-sm mb-2"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">Standart</h3>
              <p className="mt-2 text-sm text-gray-500">Klasik ve profesyonel bir CV şablonu. Çoğu sektör için uygun.</p>
              <div className="mt-4">
                <Link 
                  href="/dashboard/create/standard" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full justify-center group-hover:bg-blue-700"
                >
                  Bu Şablonu Seç
                </Link>
              </div>
            </div>
          </div>
          
          {/* Şablon 2 - Modern */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:border-blue-500 transition-colors cursor-pointer group">
            <div className="h-64 bg-gray-100 relative">
              <div className="absolute inset-0 flex flex-col p-6 bg-white">
                <div className="flex mb-4">
                  <div className="w-1/4 h-16 bg-indigo-600 rounded-full mr-4"></div>
                  <div className="flex-1">
                    <div className="h-8 bg-gray-200 rounded-sm mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded-sm w-2/3"></div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/3 pr-4">
                    <div className="h-8 bg-indigo-100 rounded-sm mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded-sm mb-2 w-2/3"></div>
                    <div className="h-4 bg-gray-200 rounded-sm mb-2"></div>
                    <div className="h-8 bg-indigo-100 rounded-sm mt-4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded-sm mb-2 w-2/3"></div>
                  </div>
                  <div className="w-2/3">
                    <div className="h-8 bg-gray-200 rounded-sm mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded-sm mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded-sm mb-2"></div>
                    <div className="h-8 bg-gray-200 rounded-sm mt-4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded-sm mb-2"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">Modern</h3>
              <p className="mt-2 text-sm text-gray-500">Çağdaş ve yaratıcı bir CV şablonu. Tasarım ve teknoloji sektörleri için ideal.</p>
              <div className="mt-4">
                <Link 
                  href="/dashboard/create/modern" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full justify-center group-hover:bg-blue-700"
                >
                  Bu Şablonu Seç
                </Link>
              </div>
            </div>
          </div>
          
          {/* Şablon 3 - Minimal */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:border-blue-500 transition-colors cursor-pointer group">
            <div className="h-64 bg-gray-100 relative">
              <div className="absolute inset-0 flex flex-col p-6 bg-white">
                <div className="h-12 flex items-center justify-center mb-6">
                  <div className="h-8 bg-gray-800 w-1/2 rounded-sm"></div>
                </div>
                <div className="flex">
                  <div className="w-full">
                    <div className="h-6 bg-gray-200 rounded-sm mb-4 w-1/3 mx-auto"></div>
                    <div className="h-4 bg-gray-200 rounded-sm mb-2 w-2/3 mx-auto"></div>
                    <div className="h-4 bg-gray-200 rounded-sm mb-2 w-1/2 mx-auto"></div>
                    <div className="h-6 bg-gray-200 rounded-sm mt-6 mb-2 w-1/3 mx-auto"></div>
                    <div className="h-4 bg-gray-200 rounded-sm mb-2 w-2/3 mx-auto"></div>
                    <div className="h-4 bg-gray-200 rounded-sm mb-2 w-1/2 mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">Minimal</h3>
              <p className="mt-2 text-sm text-gray-500">Sade ve zarif bir CV şablonu. Akademik ve kurumsal ortamlar için uygun.</p>
              <div className="mt-4">
                <Link 
                  href="/dashboard/create/minimal" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full justify-center group-hover:bg-blue-700"
                >
                  Bu Şablonu Seç
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-blue-50 rounded-lg p-6 border border-blue-100">
          <h3 className="text-lg font-medium text-blue-800 mb-2">Şablon Seçimi Hakkında</h3>
          <p className="text-blue-700">
            Seçtiğiniz şablon, CV'nizin genel görünümünü belirler. Endişelenmeyin, daha sonra istediğiniz zaman şablonu değiştirebilirsiniz.
            Tüm şablonlarımız ATS uyumludur ve profesyonel bir görünüm sağlar.
          </p>
        </div>
      </div>
    </div>
  );
} 