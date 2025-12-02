import React, { useMemo } from 'react';
import { MenuItem } from '../types';
import { Leaf, Flame, Coffee } from 'lucide-react';

interface Props {
  item: MenuItem | null;
  category: string;
  isSpinning: boolean;
}

const getFoodEmoji = (nameEn: string, nameTh: string, category: string): string => {
  const text = (nameEn + ' ' + nameTh).toLowerCase();

  // Drinks
  if (text.includes('coffee') || text.includes('americano') || text.includes('espresso') || text.includes('กาแฟ')) return '☕';
  if (text.includes('latte') || text.includes('cappuccino') || text.includes('ลาเต้') || text.includes('คาปู')) return '☕'; 
  if (text.includes('tea') || text.includes('matcha') || text.includes('cha') || text.includes('ชา')) return '🍵';
  if (text.includes('boba') || text.includes('bubble') || text.includes('pearl') || text.includes('ไข่มุก')) return '🧋';
  if (text.includes('water') || text.includes('mineral') || text.includes('น้ำเปล่า') || text.includes('น้ำแร่')) return '💧';
  if (text.includes('milk') || text.includes('นม')) return '🥛';
  if (text.includes('juice') || text.includes('smoothie') || text.includes('น้ำผลไม้') || text.includes('ปั่น')) return '🍹';
  if (text.includes('soda') || text.includes('coke') || text.includes('pepsi') || text.includes('soft drink') || text.includes('อัดลม')) return '🥤';
  if (text.includes('beer') || text.includes('เบียร์')) return '🍺';
  if (text.includes('wine') || text.includes('ไวน์')) return '🍷';
  if (text.includes('coconut') || text.includes('มะพร้าว')) return '🥥';

  // Fruits & Snacks
  if (text.includes('fruit') || text.includes('ผลไม้')) return '🍎';
  if (text.includes('apple') || text.includes('แอปเปิ้ล')) return '🍎';
  if (text.includes('banana') || text.includes('กล้วย')) return '🍌';
  if (text.includes('grape') || text.includes('องุ่น')) return '🍇';
  if (text.includes('melon') || text.includes('watermelon') || text.includes('แตงโม')) return '🍉';
  if (text.includes('orange') || text.includes('ส้ม')) return '🍊';
  if (text.includes('lemon') || text.includes('lime') || text.includes('มะนาว')) return '🍋';
  if (text.includes('pineapple') || text.includes('สับปะรด')) return '🍍';
  if (text.includes('mango') || text.includes('มะม่วง')) return '🥭';
  if (text.includes('strawberry') || text.includes('berry') || text.includes('สตรอ')) return '🍓';
  if (text.includes('peach') || text.includes('พีช')) return '🍑';
  if (text.includes('cherry') || text.includes('เชอร์รี่')) return '🍒';
  if (text.includes('avocado') || text.includes('อะโวคาโด')) return '🥑';
  
  if (text.includes('bread') || text.includes('toast') || text.includes('sandwich') || text.includes('ขนมปัง') || text.includes('แซนด์วิช')) return '🥪';
  if (text.includes('croissant') || text.includes('ครัวซอง')) return '🥐';
  if (text.includes('bagel')) return '🥯';
  if (text.includes('pancake') || text.includes('แพนเค้ก')) return '🥞';
  if (text.includes('waffle') || text.includes('วาฟเฟิล')) return '🧇';
  if (text.includes('cookie') || text.includes('biscuit') || text.includes('คุกกี้')) return '🍪';
  if (text.includes('cake') || text.includes('เค้ก')) return '🍰';
  if (text.includes('chocolate') || text.includes('ช็อกโกแลต')) return '🍫';
  if (text.includes('candy') || text.includes('sweet') || text.includes('ลูกอม')) return '🍬';
  if (text.includes('ice cream') || text.includes('ไอศกรีม') || text.includes('ไอติม')) return '🍦';
  if (text.includes('donut') || text.includes('โดนัท')) return '🍩';
  if (text.includes('popcorn') || text.includes('ป๊อปคอร์น')) return '🍿';
  if (text.includes('chip') || text.includes('fry') || text.includes('fries') || text.includes('มันฝรั่งทอด') || text.includes('เฟรนช์ฟรายส์')) return '🍟';
  if (text.includes('nut') || text.includes('almond') || text.includes('cashew') || text.includes('bean') || text.includes('ถั่ว')) return '🥜';

  // Main Dishes
  if (text.includes('burger') || text.includes('เบอร์เกอร์')) return '🍔';
  if (text.includes('pizza') || text.includes('พิซซ่า')) return '🍕';
  if (text.includes('hotdog') || text.includes('sausage') || text.includes('ไส้กรอก')) return '🌭';
  if (text.includes('taco')) return '🌮';
  if (text.includes('burrito')) return '🌯';
  
  if (text.includes('rice') || text.includes('khau') || text.includes('khao') || text.includes('ข้าว')) {
      if (text.includes('curry') || text.includes('แกง')) return '🍛';
      if (text.includes('fried') || text.includes('ผัด')) return '🍚'; // Fried rice generic or just rice
      return '🍚';
  }
  
  if (text.includes('noodle') || text.includes('pasta') || text.includes('spaghetti') || text.includes('ramen') || text.includes('ก๋วยเตี๋ยว') || text.includes('บะหมี่') || text.includes('เส้น') || text.includes('พาสต้า') || text.includes('สปาเก็ตตี้') || text.includes('pad thai') || text.includes('ผัดไทย')) return '🍜';
  
  if (text.includes('soup') || text.includes('tom yum') || text.includes('tom kha') || text.includes('suki') || text.includes('stew') || text.includes('broth') || text.includes('แกง') || text.includes('ต้ม') || text.includes('ซุป')) return '🍲';
  
  if (text.includes('salad') || text.includes('vegetable') || text.includes('สลัด') || text.includes('ผัก')) return '🥗';
  
  if (text.includes('egg') || text.includes('omelet') || text.includes('ไข่')) return '🍳';
  
  if (text.includes('chicken') || text.includes('kai') || text.includes('gai') || text.includes('wing') || text.includes('ไก่')) return '🍗';
  if (text.includes('steak') || text.includes('beef') || text.includes('meat') || text.includes('เนื้อ') || text.includes('สเต็ก')) return '🥩';
  if (text.includes('pork') || text.includes('pig') || text.includes('moo') || text.includes('หมู') || text.includes('bacon') || text.includes('เบคอน') || text.includes('kha mu')) return '🥓';
  
  if (text.includes('fish') || text.includes('seafood') || text.includes('salmon') || text.includes('tuna') || text.includes('ปลา')) return '🐟';
  if (text.includes('shrimp') || text.includes('prawn') || text.includes('กุ้ง')) return '🍤';
  if (text.includes('crab') || text.includes('pu') || text.includes('ปู')) return '🦀';
  if (text.includes('squid') || text.includes('octopus') || text.includes('หมึก')) return '🦑';
  if (text.includes('sushi') || text.includes('ซูชิ')) return '🍣';

  if (text.includes('som tum') || text.includes('papaya salad') || text.includes('ส้มตำ')) return '🌶️';
  if (text.includes('dumpling') || text.includes('gyoza') || text.includes('เกี๊ยว') || text.includes('dim sum') || text.includes('ติ่มซำ')) return '🥟';
  if (text.includes('box') || text.includes('bento') || text.includes('กล่อง')) return '🍱';
  
  if (text.includes('basil') || text.includes('krapow') || text.includes('kaprao') || text.includes('กะเพรา')) return '🌿';

  // Fallbacks by category
  if (category.toLowerCase().includes('main')) return '🍽️';
  if (category.toLowerCase().includes('snack')) return '🥨';
  if (category.toLowerCase().includes('drink')) return '🥤';
  
  return '🍴';
};

const NutritionCard: React.FC<Props> = ({ item, category, isSpinning }) => {
  const emoji = useMemo(() => {
    if (!item) return category === 'Main Dish' ? '🍽️' : category === 'Snack' ? '🥨' : '🥤';
    return getFoodEmoji(item.name_en, item.name_th, category);
  }, [item, category]);

  // Visual themes based on category
  const theme = useMemo(() => {
    if (category === 'Main Dish') return { bg: 'bg-orange-50', circle: 'bg-orange-100', icon: 'bg-orange-500' };
    if (category === 'Snack') return { bg: 'bg-yellow-50', circle: 'bg-yellow-100', icon: 'bg-yellow-500' };
    return { bg: 'bg-blue-50', circle: 'bg-blue-100', icon: 'bg-blue-500' };
  }, [category]);

  const getHealthColor = (score: number) => {
    if (score >= 8) return "bg-green-100 text-green-700 border-green-200";
    if (score >= 5) return "bg-yellow-100 text-yellow-700 border-yellow-200";
    return "bg-red-100 text-red-700 border-red-200";
  };

  if (!item) {
    return (
      <div className={`rounded-xl shadow-sm h-80 flex flex-col items-center justify-center border-2 border-dashed border-slate-200 ${theme.bg}`}>
        <div className={`w-20 h-20 rounded-full ${theme.circle} flex items-center justify-center text-4xl mb-4 opacity-50 grayscale`}>
          {emoji}
        </div>
        <p className="text-slate-400 font-medium">รอสุ่ม {category}</p>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-xl shadow-lg border flex flex-col h-full relative overflow-hidden transition-all duration-75 min-h-[20rem] ${
      isSpinning 
        ? 'border-orange-400 scale-[1.02] shadow-orange-200/50' 
        : 'border-slate-100 hover:shadow-xl hover:-translate-y-1'
    }`}>
      {/* Active Spinning Indicator Overlay */}
      {isSpinning && (
        <div className="absolute inset-0 bg-white/40 pointer-events-none z-10 backdrop-blur-[1px]" />
      )}

      {/* Header Image Area */}
      <div className={`h-24 ${theme.bg} relative flex items-center justify-center overflow-hidden`}>
        <div className={`absolute w-32 h-32 rounded-full ${theme.circle} -bottom-16 left-1/2 -translate-x-1/2`} />
        
        {/* Animated Emoji Avatar */}
        <div className={`relative z-10 text-6xl drop-shadow-md transform transition-transform duration-300 ${isSpinning ? 'animate-pulse scale-90' : 'animate-bounce-short scale-100'}`}>
          {emoji}
        </div>

        {/* Health Score Badge */}
        <div className={`absolute top-2 right-2 px-2.5 py-1 rounded-lg text-xs font-bold z-20 shadow-sm border ${getHealthColor(item.health_score)}`}>
          Score: {item.health_score}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-2">
          <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">{category}</span>
          <h3 className="text-lg font-bold text-slate-800 leading-tight line-clamp-2 min-h-[3.5rem] flex items-center mt-1">
            {item.name_th}
          </h3>
          <p className="text-xs text-slate-500 italic truncate">{item.name_en}</p>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-auto text-sm pt-2">
          <div className="flex items-center gap-1.5 text-slate-600 bg-slate-50 p-1.5 rounded-lg">
            <Flame size={14} className="text-orange-500 shrink-0" />
            <span className="text-xs font-medium">{item.calories_kcal} kcal</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-600 bg-slate-50 p-1.5 rounded-lg">
            <Leaf size={14} className="text-green-500 shrink-0" />
            <span className="text-xs font-medium">Sug {item.sugar_g}g</span>
          </div>
          {item.caffeine_level !== 'none' && (
            <div className="col-span-2 flex items-center gap-1.5 text-slate-600 bg-amber-50 p-1.5 rounded-lg">
              <Coffee size={14} className="text-amber-700 shrink-0" />
              <span className="text-xs font-medium capitalize text-amber-900">Caf: {item.caffeine_level}</span>
            </div>
          )}
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1">
          {item.type_tag === 'healthy' && <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full">Healthy</span>}
          {item.type_tag === 'high_protein' && <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-bold rounded-full">Protein+</span>}
          {item.type_tag === 'high_calorie' && <span className="px-2 py-0.5 bg-red-100 text-red-700 text-[10px] font-bold rounded-full">High Cal</span>}
          {item.type_tag === 'low_carb' && <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 text-[10px] font-bold rounded-full">Low Carb</span>}
          {item.type_tag === 'normal' && <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full">Normal</span>}
        </div>
      </div>
    </div>
  );
};

export default NutritionCard;