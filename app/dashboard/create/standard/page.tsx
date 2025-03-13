import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function StandardCVPage() {
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
            <h1 className="text-3xl font-bold text-gray-900">Standart CV Oluştur</h1>
            <Link 
              href="/dashboard/create" 
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Geri Dön
            </Link>
          </div>
          <p className="mt-2 text-gray-600">Standart CV şablonunu kullanarak profesyonel bir özgeçmiş oluşturun.</p>
        </div>
        
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <form>
              {/* Kişisel Bilgiler */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Kişisel Bilgiler</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">Ad</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Adınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Soyad</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Soyadınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="ornek@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="05XX XXX XX XX"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Adres</label>
                    <textarea
                      id="address"
                      name="address"
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Adresiniz"
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Ünvan</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Örn: Yazılım Mühendisi"
                    />
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">Web Sitesi (İsteğe Bağlı)</label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="https://www.example.com"
                    />
                  </div>
                </div>
              </div>
              
              {/* Özet */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Profesyonel Özet</h2>
                <div>
                  <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-1">Kendinizi kısaca tanıtın</label>
                  <textarea
                    id="summary"
                    name="summary"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Kendiniz ve kariyer hedefleriniz hakkında kısa bir özet yazın..."
                  ></textarea>
                </div>
              </div>
              
              {/* Eğitim */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-800">Eğitim</h2>
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Ekle
                  </button>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-md mb-4 border border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-1">Okul/Üniversite</label>
                      <input
                        type="text"
                        id="school"
                        name="school"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Okul veya üniversite adı"
                      />
                    </div>
                    <div>
                      <label htmlFor="degree" className="block text-sm font-medium text-gray-700 mb-1">Derece/Bölüm</label>
                      <input
                        type="text"
                        id="degree"
                        name="degree"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Örn: Bilgisayar Mühendisliği"
                      />
                    </div>
                    <div>
                      <label htmlFor="eduStartDate" className="block text-sm font-medium text-gray-700 mb-1">Başlangıç Tarihi</label>
                      <input
                        type="month"
                        id="eduStartDate"
                        name="eduStartDate"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="eduEndDate" className="block text-sm font-medium text-gray-700 mb-1">Bitiş Tarihi</label>
                      <input
                        type="month"
                        id="eduEndDate"
                        name="eduEndDate"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="eduDescription" className="block text-sm font-medium text-gray-700 mb-1">Açıklama (İsteğe Bağlı)</label>
                      <textarea
                        id="eduDescription"
                        name="eduDescription"
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Eğitiminiz hakkında ek bilgiler..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* İş Deneyimi */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-800">İş Deneyimi</h2>
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Ekle
                  </button>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-md mb-4 border border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Şirket</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Şirket adı"
                      />
                    </div>
                    <div>
                      <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">Pozisyon</label>
                      <input
                        type="text"
                        id="position"
                        name="position"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Örn: Yazılım Geliştirici"
                      />
                    </div>
                    <div>
                      <label htmlFor="workStartDate" className="block text-sm font-medium text-gray-700 mb-1">Başlangıç Tarihi</label>
                      <input
                        type="month"
                        id="workStartDate"
                        name="workStartDate"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="workEndDate" className="block text-sm font-medium text-gray-700 mb-1">Bitiş Tarihi</label>
                      <input
                        type="month"
                        id="workEndDate"
                        name="workEndDate"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="workDescription" className="block text-sm font-medium text-gray-700 mb-1">İş Tanımı ve Sorumluluklar</label>
                      <textarea
                        id="workDescription"
                        name="workDescription"
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Görev ve sorumluluklarınızı açıklayın..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Yetenekler */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-800">Yetenekler</h2>
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Ekle
                  </button>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-md mb-4 border border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="skillName" className="block text-sm font-medium text-gray-700 mb-1">Yetenek</label>
                      <input
                        type="text"
                        id="skillName"
                        name="skillName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Örn: JavaScript, Proje Yönetimi, vb."
                      />
                    </div>
                    <div>
                      <label htmlFor="skillLevel" className="block text-sm font-medium text-gray-700 mb-1">Seviye</label>
                      <select
                        id="skillLevel"
                        name="skillLevel"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Seviye Seçin</option>
                        <option value="Başlangıç">Başlangıç</option>
                        <option value="Orta">Orta</option>
                        <option value="İyi">İyi</option>
                        <option value="Çok İyi">Çok İyi</option>
                        <option value="Uzman">Uzman</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Diller */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-800">Diller</h2>
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Ekle
                  </button>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-md mb-4 border border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">Dil</label>
                      <input
                        type="text"
                        id="language"
                        name="language"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Örn: İngilizce, Almanca, vb."
                      />
                    </div>
                    <div>
                      <label htmlFor="languageLevel" className="block text-sm font-medium text-gray-700 mb-1">Seviye</label>
                      <select
                        id="languageLevel"
                        name="languageLevel"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Seviye Seçin</option>
                        <option value="Başlangıç">Başlangıç</option>
                        <option value="Orta">Orta</option>
                        <option value="İyi">İyi</option>
                        <option value="Çok İyi">Çok İyi</option>
                        <option value="Anadil">Anadil</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Kaydet ve Önizle Butonları */}
              <div className="flex justify-end space-x-4 mt-8">
                <button
                  type="button"
                  className="px-6 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Önizle
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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