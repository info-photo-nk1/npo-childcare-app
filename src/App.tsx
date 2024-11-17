import React from 'react';
import { 
  Baby, 
  Building2, 
  Calendar, 
  MessageCircle, 
  Map, 
  Bot, 
  BarChart3, 
  Bell,
  Menu,
  Search
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Baby className="h-8 w-8 text-orange-500" />
              <h1 className="ml-2 text-xl font-bold text-gray-900">育児支援プラットフォーム</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-orange-500">
                <Search className="h-6 w-6" />
              </button>
              <button className="p-2 text-gray-400 hover:text-orange-500 relative">
                <Bell className="h-6 w-6" />
                <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-orange-500"></span>
              </button>
              <button className="p-2 text-gray-400 hover:text-orange-500">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">こんにちは、田中さん</h2>
          <p className="mt-1 text-gray-500">今日も素敵な一日をお過ごしください。</p>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow border-t-4 border-orange-400">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">今日の記録</h3>
              <Baby className="h-6 w-6 text-orange-500" />
            </div>
            <p className="text-sm text-gray-500">お子様の日々の成長を記録</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow border-t-4 border-orange-400">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">施設予約</h3>
              <Building2 className="h-6 w-6 text-orange-500" />
            </div>
            <p className="text-sm text-gray-500">保育施設の空き状況確認・予約</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow border-t-4 border-orange-400">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">イベント</h3>
              <Calendar className="h-6 w-6 text-orange-500" />
            </div>
            <p className="text-sm text-gray-500">地域の育児イベント情報</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow border-t-4 border-orange-400">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">相談室</h3>
              <MessageCircle className="h-6 w-6 text-orange-500" />
            </div>
            <p className="text-sm text-gray-500">24時間育児相談対応</p>
          </div>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">今日のスケジュール</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <div>
                    <p className="font-medium text-orange-900">保育園お迎え</p>
                    <p className="text-sm text-orange-700">15:00</p>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium text-orange-600 bg-orange-100 rounded-full">
                    まもなく
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">予防接種</p>
                    <p className="text-sm text-gray-700">16:30</p>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full">
                    本日
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">最新のお知らせ</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <p className="font-medium text-gray-900">保育園からのお知らせ</p>
                  <p className="text-sm text-gray-500 mt-1">
                    来週の遠足について詳細が決まりました。
                  </p>
                  <p className="text-xs text-gray-400 mt-1">2時間前</p>
                </div>
                <div className="border-l-4 border-orange-300 pl-4">
                  <p className="font-medium text-gray-900">予防接種のご案内</p>
                  <p className="text-sm text-gray-500 mt-1">
                    定期予防接種の時期が近づいています。
                  </p>
                  <p className="text-xs text-gray-400 mt-1">本日</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">AI サポート</h3>
              <div className="bg-orange-50 rounded-lg p-4">
                <div className="flex items-center mb-4">
                  <Bot className="h-6 w-6 text-orange-500 mr-2" />
                  <p className="text-sm text-gray-700">
                    何かお困りのことはありますか？
                  </p>
                </div>
                <button className="w-full bg-orange-500 text-white rounded-lg py-2 text-sm hover:bg-orange-600 transition-colors">
                  チャットを開始
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">地域の育児支援マップ</h3>
              <div className="bg-orange-50 rounded-lg h-48 flex items-center justify-center">
                <Map className="h-8 w-8 text-orange-300" />
              </div>
              <button className="w-full mt-4 bg-white border border-orange-200 text-gray-700 rounded-lg py-2 text-sm hover:bg-orange-50 transition-colors">
                マップを開く
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">成長記録</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">身長</span>
                  <span className="text-sm font-medium text-gray-900">95cm</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">体重</span>
                  <span className="text-sm font-medium text-gray-900">14kg</span>
                </div>
                <div className="mt-4">
                  <BarChart3 className="h-32 w-full text-orange-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;