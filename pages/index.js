import ContactForm from "@components/contactForm";
import Image from "next/image";
import Header from "../components/header";
export default function IndexPage() {
	return (
		<>
			<Header />
			<div className=" bg-lightBlue lg:py-4">
				<div className=" lg:max-w-screen-xl lg:mx-auto flex flex-col lg:flex-row-reverse lg:justify-between  items-center justify-center space-y-6 lg:space-y-0 py-6 font-montserrat">
					<div className="   lg:-mb-24  ">
						<Image
							src="/HomeImage.jpg"
							alt="Four one-eyed aliens playing"
							width="600"
							height="350"
							className="object-cover shadow-xl"
							priority
						/>
					</div>
					<div className="max-w-90 mx-auto lg:ml-0 md:max-w-prose self-start flex flex-wrap">
						<div>
							<h3 className="uppercase font-bold text-sm tracking-wider">
								Financing that works for you
							</h3>
							<h1 className=" font-merriweather text-2xl font-semibold">
								Financing by Builders, for Builders.
							</h1>
							<p>
								At Built Capital, we understand the challenges with raising
								money for home building and lot development.
							</p>
							<p>
								We’ve built homes and communities across the Southeast. Our team
								is here to help you stabilize your risk, grow your company, and
								provide a win-win structure.
							</p>
							<p>
								We’re offering land banking, financing, and equity solutions for
								home builders, by home builders.
							</p>
						</div>
						<a href="#contact" className="whiteButton">
							Contact Us
						</a>
					</div>
				</div>
			</div>
			<div className="  flex flex-col items-center justify-center space-y-6 py-6 font-montserrat">
				<div className="max-w-90 lg:max-w-screen-xl flex flex-wrap space-y-6">
					<div className="max-w-prose">
						<h2 className="font-merriweather text-xl font-semibold">
							We Know the Structures that Worked For Us
						</h2>
						<p>
							Let’s make them work for you. With options for land banking,
							mezzanine investments and more, Built Capital features an array of
							real estate investment opportunities.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						<div class="et_pb_text_inner">
							<h3>Land Banking</h3>
							<p>
								Built Capital owns the land, and home builders can buy lots from
								us in a takedown structure, freeing up their balance sheets.
							</p>
						</div>
						<div class="et_pb_text_inner">
							<h3>Mezzanine Investments</h3>
							<p>Here, we’ll provide the mezzanine capital for your project.</p>
						</div>
						<div class="et_pb_text_inner">
							<h3>Corporate Debt &amp; Equity</h3>
							<p>
								Our team can invest or arrange corporate debt and/or equity.
							</p>
						</div>
						<div class="et_pb_text_inner">
							<h3>Model Home Leaseback</h3>
							<p>Free up your balance sheet by selling us your model homes.</p>
						</div>
					</div>
				</div>
				<div className="h-48 md:h-96 lg:max-w-screen-lg w-full relative">
					<Image
						src="/Southern-States-1.svg"
						alt="Four one-eyed aliens playing"
						layout="fill"
						className="object-cover md:object-fill"
						priority
					/>
				</div>
				<div className="max-w-90 flex flex-wrap space-y-6">
					<div class="et_pb_text_inner">
						<h2>Our Industry Experience</h2>
						<p>
							As a subsidiary of{" "}
							<a
								href="https://davidsonholding.com/?utm_source=built_capital&amp;utm_medium=referral"
								target="_blank"
								rel="noopener noreferrer"
								className="font-semibold"
							>
								Davidson Holding Company
							</a>
							, we’re backed by years of home building experience. Our sister
							company,{" "}
							<a
								href="https://davidsonhomesllc.com/?utm_source=built_capital&amp;utm_medium=referral"
								target="_blank"
								rel="noopener noreferrer"
								className="font-semibold"
							>
								Davidson Homes
							</a>{" "}
							has built thousands of homes in some of the South’s
							fastest-growing regions.
						</p>
						<p>
							As home builders ourselves, we understand not every structure is a
							$10 million investment, and so Built Capital is uniquely
							positioned to underwrite small and midsize structures.
						</p>
						<p>
							We trust and depend upon your local expertise, and we are here to
							support your business.
						</p>
					</div>
				</div>
			</div>
			<div className=" bg-lightBlue flex flex-col items-center justify-center space-y-6 py-6 font-montserrat">
				<div className="h-56 md:h-96 max-w-90 lg:max-w-screen-lg w-full relative shadow-xl">
					<Image
						src="/Levi-Headshot00795-scaled.jpg"
						alt="Four one-eyed aliens playing"
						layout="fill"
						className="object-cover md:object-top"
						priority
					/>
				</div>
				<div className="max-w-90 flex flex-wrap">
					<div class="et_pb_text_inner">
						<h3>Meet Our Managing Director</h3>
						<h1>Levi Mixon</h1>
						<p>
							As COO of a regional builder’s holding company, Levi oversaw the
							daily operations of a mid-size home builder and developer.
						</p>
						<p>
							There he led his team to increase revenue from $100M to $250M in
							just five years. As the head of its capital team, he successfully
							managed over $35M in private investor debt.
						</p>
						<p>
							Now, he leads Built Capital’s fundraising efforts, securing assets
							and investments.
						</p>
					</div>
					<a href="#contact" className="whiteButton">
						Read More
					</a>
				</div>
			</div>
			<div className="  flex flex-col items-center justify-center space-y-6 py-6 font-montserrat">
				<div className="max-w-90 flex flex-wrap space-y-6">
					<div class="et_pb_text_inner">
						<div class="et_pb_text_inner">
							<h3 className="text-center">Want more information?</h3>
							<h1 className="text-center pb-4">Contact Us</h1>
						</div>

						<ContactForm />
					</div>
				</div>
			</div>
		</>
	);
}
