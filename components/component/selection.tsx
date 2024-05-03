/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/6q90zlcieum
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Judson } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

judson({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
export function Selection() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <div className="text-center space-y-2">
        <div className="text-4xl font-bold typewriter">Unleash Your Creativity</div>
        <p className="text-gray-500 dark:text-gray-400">Discover the power of our innovative solutions.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="group relative h-[300px] w-[300px] overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gray-900 opacity-0 transition-opacity duration-300 group-hover:opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Creativity Unleashed</h3>
              <p>Unlock your creative potential with our cutting-edge tools and resources.</p>
            </div>
          </div>
          <img
            alt="Card 1"
            className="h-full w-full object-cover"
            height="300"
            src="/image.png"
            style={{
              aspectRatio: "300/300",
              objectFit: "cover",
            }}
            width="300"
          />
        </div>
        <div className="group relative h-[300px] w-[300px] overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gray-900 opacity-0 transition-opacity duration-300 group-hover:opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Innovative Solutions</h3>
              <p>Discover our cutting-edge solutions that will transform your workflow.</p>
            </div>
          </div>
          <img
            alt="Card 2"
            className="h-full w-full object-cover"
            height="300"
            src="/image.png"
            style={{
              aspectRatio: "300/300",
              objectFit: "cover",
            }}
            width="300"
          />
        </div>
        <div className="group relative h-[300px] w-[300px] overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gray-900 opacity-0 transition-opacity duration-300 group-hover:opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Transformative Impact</h3>
              <p>Experience the transformative power of our innovative solutions.</p>
            </div>
          </div>
          <img
            alt="Card 3"
            className="h-full w-full object-cover"
            height="300"
            src="/image.png"
            style={{
              aspectRatio: "300/300",
              objectFit: "cover",
            }}
            width="300"
          />
        </div>
      </div>
    </div>
  )
}
