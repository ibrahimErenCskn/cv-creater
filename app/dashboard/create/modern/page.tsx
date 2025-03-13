import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function ModernCVPage() {
  const session = await auth();
  
  // Kullanıcı giriş yapmamışsa ana sayfaya yönlendir
  if (!session || !session.user) {
    redirect("/");
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-indigo-900">Modern CV Oluştur</h1>
            <Link 
              href="/dashboard/create" 
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Geri Dön
            </Link>
          </div>
          <p className="mt-2 text-gray-600">Modern CV şablonunu kullanarak yaratıcı ve çağdaş bir özgeçmiş oluşturun.</p>
        </div>
        
        <div className="bg-white shadow-md rounded-lg overflow-hidden border-t-4 border-indigo-500">
          <div className="p-6">
            <form>
              {/* Kişisel Bilgiler */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-indigo-800 mb-4 pb-2 border-b border-indigo-100">Kişisel Bilgiler</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">Ad</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Adınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Soyad</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Soyadınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="ornek@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="05XX XXX XX XX"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Adres</label>
                    <textarea
                      id="address"
                      name="address"
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Adresiniz"
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Ünvan</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Örn: UX/UI Tasarımcısı"
                    />
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">Web Sitesi</label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="https://www.example.com"
                    />
                  </div>
                </div>
              </div>
              
              {/* Sosyal Medya */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-indigo-800 mb-4 pb-2 border-b border-indigo-100">Sosyal Medya</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
                    <input
                      type="url"
                      id="linkedin"
                      name="linkedin"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="https://www.linkedin.com/in/username"
                    />
                  </div>
                  <div>
                    <label htmlFor="github" className="block text-sm font-medium text-gray-700 mb-1">GitHub</label>
                    <input
                      type="url"
                      id="github"
                      name="github"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="https://github.com/username"
                    />
                  </div>
                  <div>
                    <label htmlFor="behance" className="block text-sm font-medium text-gray-700 mb-1">Behance/Dribbble</label>
                    <input
                      type="url"
                      id="behance"
                      name="behance"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="https://www.behance.net/username"
                    />
                  </div>
                  <div>
                    <label htmlFor="twitter" className="block text-sm font-medium text-gray-700 mb-1">Twitter</label>
                    <input
                      type="url"
                      id="twitter"
                      name="twitter"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="https://twitter.com/username"
                    />
                  </div>
                </div>
              </div>
              
              {/* Özet */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-indigo-800 mb-4 pb-2 border-b border-indigo-100">Profesyonel Özet</h2>
                <div>
                  <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-1">Kendinizi kısaca tanıtın</label>
                  <textarea
                    id="summary"
                    name="summary"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Kendiniz ve kariyer hedefleriniz hakkında kısa bir özet yazın..."
                  ></textarea>
                </div>
              </div>
              
              {/* Eğitim */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-indigo-100">
                  <h2 className="text-xl font-semibold text-indigo-800">Eğitim</h2>
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Ekle
                  </button>
                </div>
                
                <div className="bg-indigo-50 p-4 rounded-md mb-4 border border-indigo-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-1">Okul/Üniversite</label>
                      <input
                        type="text"
                        id="school"
                        name="school"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Okul veya üniversite adı"
                      />
                    </div>
                    <div>
                      <label htmlFor="degree" className="block text-sm font-medium text-gray-700 mb-1">Derece/Bölüm</label>
                      <input
                        type="text"
                        id="degree"
                        name="degree"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Örn: Grafik Tasarım"
                      />
                    </div>
                    <div>
                      <label htmlFor="eduStartDate" className="block text-sm font-medium text-gray-700 mb-1">Başlangıç Tarihi</label>
                      <input
                        type="month"
                        id="eduStartDate"
                        name="eduStartDate"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="eduEndDate" className="block text-sm font-medium text-gray-700 mb-1">Bitiş Tarihi</label>
                      <input
                        type="month"
                        id="eduEndDate"
                        name="eduEndDate"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="eduDescription" className="block text-sm font-medium text-gray-700 mb-1">Açıklama</label>
                      <textarea
                        id="eduDescription"
                        name="eduDescription"
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Eğitiminiz hakkında ek bilgiler..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* İş Deneyimi */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-indigo-100">
                  <h2 className="text-xl font-semibold text-indigo-800">İş Deneyimi</h2>
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Ekle
                  </button>
                </div>
                
                <div className="bg-indigo-50 p-4 rounded-md mb-4 border border-indigo-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Şirket</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Şirket adı"
                      />
                    </div>
                    <div>
                      <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">Pozisyon</label>
                      <input
                        type="text"
                        id="position"
                        name="position"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Örn: Kıdemli Tasarımcı"
                      />
                    </div>
                    <div>
                      <label htmlFor="workStartDate" className="block text-sm font-medium text-gray-700 mb-1">Başlangıç Tarihi</label>
                      <input
                        type="month"
                        id="workStartDate"
                        name="workStartDate"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="workEndDate" className="block text-sm font-medium text-gray-700 mb-1">Bitiş Tarihi</label>
                      <input
                        type="month"
                        id="workEndDate"
                        name="workEndDate"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="workDescription" className="block text-sm font-medium text-gray-700 mb-1">İş Tanımı ve Sorumluluklar</label>
                      <textarea
                        id="workDescription"
                        name="workDescription"
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Görev ve sorumluluklarınızı açıklayın..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Yetenekler */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-indigo-100">
                  <h2 className="text-xl font-semibold text-indigo-800">Yetenekler</h2>
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Ekle
                  </button>
                </div>
                
                <div className="bg-indigo-50 p-4 rounded-md mb-4 border border-indigo-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="skillName" className="block text-sm font-medium text-gray-700 mb-1">Yetenek</label>
                      <input
                        type="text"
                        id="skillName"
                        name="skillName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Örn: Adobe Photoshop, React, vb."
                      />
                    </div>
                    <div>
                      <label htmlFor="skillLevel" className="block text-sm font-medium text-gray-700 mb-1">Seviye</label>
                      <input
                        type="range"
                        id="skillLevel"
                        name="skillLevel"
                        min="1"
                        max="5"
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Başlangıç</span>
                        <span>Orta</span>
                        <span>Uzman</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Projeler */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-indigo-100">
                  <h2 className="text-xl font-semibold text-indigo-800">Projeler</h2>
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Ekle
                  </button>
                </div>
                
                <div className="bg-indigo-50 p-4 rounded-md mb-4 border border-indigo-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="projectName" className="block text-sm font-medium text-gray-700 mb-1">Proje Adı</label>
                      <input
                        type="text"
                        id="projectName"
                        name="projectName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Proje adı"
                      />
                    </div>
                    <div>
                      <label htmlFor="projectUrl" className="block text-sm font-medium text-gray-700 mb-1">Proje URL (İsteğe Bağlı)</label>
                      <input
                        type="url"
                        id="projectUrl"
                        name="projectUrl"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="https://www.example.com/proje"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-1">Proje Açıklaması</label>
                      <textarea
                        id="projectDescription"
                        name="projectDescription"
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Projenizi kısaca açıklayın..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Kaydet ve Önizle Butonları */}
              <div className="flex justify-end space-x-4 mt-8">
                <button
                  type="button"
                  className="px-6 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Önizle
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Kaydet
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 