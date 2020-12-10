import Image from "next/image";

export default function IndexPage() {
	return (
		<div className=" bg-lightBlue flex flex-col items-center justify-center space-y-6 py-6 font-montserrat">
			<div className="h-48 max-w-90 w-full relative shadow-xl">
				<Image
					src="/HomeImage.jpg"
					alt="Four one-eyed aliens playing"
					layout="fill"
					className="object-cover"
					priority
				/>
			</div>
			<div className="max-w-90">
				<div>
					<h3 className="uppercase font-bold text-sm tracking-wider">
						Financing that works for you
					</h3>
					<h1 className=" font-merriweather text-2xl font-semibold">
						Financing by Builders, for Builders.
					</h1>
					<p>
						At Built Capital, we understand the challenges with raising money
						for home building and lot development.
					</p>
					<p>
						We’ve built homes and communities across the Southeast. Our team is
						here to help you stabilize your risk, grow your company, and provide
						a win-win structure.
					</p>
					<p>
						We’re offering land banking, financing, and equity solutions for
						home builders, by home builders.
					</p>
				</div>
			</div>

			<h2 className="p-3 font-bold bg-yellow-300 md:text-2xl">
				Hi! Welcome to your first Next.js site.
			</h2>
		</div>
	);
}
