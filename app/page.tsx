import { auth } from "@/auth";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Profesyonel CV'nizi <span className="text-blue-600">Dakikalar İçinde</span> Oluşturun
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Modern, özelleştirilebilir şablonlar ve kullanımı kolay araçlarla profesyonel bir CV oluşturun. 
            İş başvurularınızda öne çıkın ve kariyerinizde bir adım önde olun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {session ? (
              <Link 
                href="/dashboard" 
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                CV'lerime Git
              </Link>
            ) : (
              <Link 
                href="/api/auth/signin" 
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                Hemen Başla
              </Link>
            )}
            <Link 
              href="#features" 
              className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-200 hover:border-blue-300 transition-colors shadow-sm"
            >
              Özellikler
            </Link>
          </div>
        </div>
        
        {/* Hero Visual */}
        <div className="mt-16 relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl max-w-2xl text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Profesyonel CV Şablonları</h3>
              <p className="text-lg">Modern ve ATS uyumlu şablonlar ile iş başvurularınızda öne çıkın</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Neden CV Oluşturucumuzu Kullanmalısınız?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Modern Şablonlar</h3>
            <p className="text-gray-600">
              İşe alım uzmanları tarafından onaylanmış, profesyonel ve modern şablonlar ile öne çıkın.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Kolay Özelleştirme</h3>
            <p className="text-gray-600">
              Sürükle ve bırak arayüzü ile CV'nizi kolayca özelleştirin, renkleri ve bölümleri değiştirin.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Anında İndirme</h3>
            <p className="text-gray-600">
              CV'nizi PDF formatında anında indirin veya bağlantı ile paylaşın.
            </p>
          </div>
          
          {/* Feature 4 */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">ATS Uyumlu</h3>
            <p className="text-gray-600">
              Başvuru Takip Sistemleri (ATS) ile uyumlu CV'ler oluşturarak işe alım süreçlerinde avantaj sağlayın.
            </p>
          </div>
          
          {/* Feature 5 */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Güvenli Depolama</h3>
            <p className="text-gray-600">
              CV'leriniz güvenli bir şekilde saklanır ve istediğiniz zaman güncelleyebilirsiniz.
            </p>
          </div>
          
          {/* Feature 6 */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Tamamen Ücretsiz</h3>
            <p className="text-gray-600">
              Tüm temel özellikler tamamen ücretsiz olarak sunulmaktadır. Premium özellikler için ücretli plana geçebilirsiniz.
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-blue-600 rounded-2xl p-10 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Kariyerinizde Bir Adım Öne Geçin
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            Profesyonel CV'nizi oluşturmak için hemen ücretsiz hesap açın. Sadece birkaç dakikanızı alacak!
          </p>
          {session ? (
            <Link 
              href="/dashboard" 
              className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors shadow-lg inline-block"
            >
              CV'lerime Git
            </Link>
          ) : (
            <Link 
              href="/api/auth/signin" 
              className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors shadow-lg inline-block"
            >
              Ücretsiz Hesap Oluştur
            </Link>
          )}
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Kullanıcılarımız Ne Diyor?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-600 font-bold">AY</span>
              </div>
              <div>
                <h4 className="font-semibold">Ahmet Yılmaz</h4>
                <p className="text-gray-500 text-sm">Yazılım Mühendisi</p>
              </div>
            </div>
            <p className="text-gray-600">
              "Bu platform sayesinde profesyonel bir CV oluşturdum ve bir hafta içinde iş teklifleri almaya başladım. Kullanımı çok kolay ve sonuçlar harika!"
            </p>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-600 font-bold">SD</span>
              </div>
              <div>
                <h4 className="font-semibold">Selin Demir</h4>
                <p className="text-gray-500 text-sm">Pazarlama Uzmanı</p>
              </div>
            </div>
            <p className="text-gray-600">
              "Daha önce birçok CV oluşturma aracı denedim, ancak bu platform hepsinden daha iyi. Şablonlar modern ve özelleştirme seçenekleri çok zengin."
            </p>
          </div>
          
          {/* Testimonial 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-600 font-bold">MK</span>
              </div>
              <div>
                <h4 className="font-semibold">Mehmet Kaya</h4>
                <p className="text-gray-500 text-sm">Finans Analisti</p>
              </div>
            </div>
            <p className="text-gray-600">
              "ATS uyumlu CV'ler oluşturabilmek çok önemli. Bu platform sayesinde başvurularımın daha fazla dikkat çektiğini fark ettim. Kesinlikle tavsiye ederim!"
            </p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-gray-900">CV Oluşturucu</h3>
              <p className="text-gray-600 mt-2">Profesyonel CV'ler için en iyi çözüm</p>
            </div>
            
            <div className="flex space-x-6">
              <Link href="/about" className="text-gray-600 hover:text-blue-600">Hakkımızda</Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600">İletişim</Link>
              <Link href="/privacy" className="text-gray-600 hover:text-blue-600">Gizlilik Politikası</Link>
              <Link href="/terms" className="text-gray-600 hover:text-blue-600">Kullanım Şartları</Link>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CV Oluşturucu. Tüm hakları saklıdır.
          </div>
        </div>
      </footer>
    </div>
  );
}
