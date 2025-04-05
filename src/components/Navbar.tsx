// components/Navbar.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, ShoppingCart, PlusCircle, PieChart } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: <Home size={18} />,
    },
    {
      name: 'Compras',
      href: '/',
      icon: <ShoppingCart size={18} />,
    },
    {
      name: 'Nova Compra',
      href: '/compras/nova',
      icon: <PlusCircle size={18} />,
    },
    {
      name: 'Relatórios',
      href: '/relatorios',
      icon: <PieChart size={18} />,
    },
  ];

  return (
    <header className="border-b bg-white/50 backdrop-blur-sm sticky top-0 z-10">
      <nav className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            {/* Espaço para futuros itens (como usuário) */}
          </div>
        </div>
      </nav>
    </header>
  );
}