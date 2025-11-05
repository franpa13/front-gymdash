import Link from 'next/link';
import { itemsSidebar } from '../../../const/sidebar-links';
export const Footer = () => {
  return (
    <footer className="w-full pt-4 border-t  border-gray-200  ">
      <div className="flex flex-col md:flex-row items-center lg:justify-between text-center md:justify-between  mx-auto text-sm text-gray-500">
        <p className="mb-2 md:mb-0">
          © 2025, Hecho con mucho<span className="text-red-500">☕️</span> por{" "}
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 font-medium transition-colors"
          >
            Francisco Paredes
          </a>{" "}


        </p>

        <div className="flex gap-4 text-gray-500 text-sm">
          {itemsSidebar.map((item) => (
            <Link
              key={item.title}
              href={item.url}
              className="hover:text-gray-700 transition-colors"
            >
              {item.title}
            </Link>
          ))}
          
        </div>
      </div>
    </footer>
  )
}
