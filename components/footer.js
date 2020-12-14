import Image from "next/image";
export default function Footer() {
	return (
		<footer className="bg-lightBlue">
			<div className="flex text-primary font-montserrat flex-col items-center justify-between lg:container px-4 py-6 mx-auto text-sm text-white md:px-6">
				<div className="h-24 w-48 relative">
					<Image
						src="/DHC-logo_FINAL.png"
						alt="Davidson Holding Company Logo"
						layout="fill"
						className="object-cover"
						priority
					/>
				</div>
				<div>A Davidson Holding Company</div>
				<div className=" font-merriweather font-semibold flex flex-wrap flex-col text-center">
					Built Capital, LLC
					<div className="font-montserrat font-light">Copyright 2020</div>
				</div>
				<div className=" font-merriweather font-semibold flex flex-wrap flex-col text-center">
					Phone
					<div className="font-montserrat font-light">(205) 999-6903</div>
				</div>
				<div className=" font-merriweather font-semibold flex flex-wrap flex-col text-center">
					Address
					<div className="font-montserrat font-light">
						336 James Record Rd.
						<br />
						Huntsville, AL
					</div>
				</div>
			</div>
		</footer>
	);
}
