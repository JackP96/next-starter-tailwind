import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
	const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
	const toggleclassName = () => {
		setMobileMenuIsOpen(!mobileMenuIsOpen);
	};

	return (
		<div className="relative bg-white shadow-md">
			<div className=" max-w-screen-xl mx-auto px-4 sm:px-6">
				<div className="flex justify-between items-center border-gray-100 py-4 md:justify-start md:space-x-10">
					<div className="flex justify-start lg:w-0 lg:flex-1">
						<a href="#">
							<span className="sr-only">Workflow</span>
							<Image
								className="h-8 w-auto sm:h-10"
								src="/logo.png"
								height={40}
								width={170}
								className="object-contain object-left"
								alt=""
							/>
						</a>
					</div>

					<div className="-mr-2 -my-2 md:hidden">
						<button
							onClick={toggleclassName}
							type="button"
							className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
						>
							<span className="sr-only">Open menu</span>

							<svg
								className="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
					<nav className="hidden md:flex space-x-16 font-montserrat">
						<a
							href="#"
							className="text-base font-bold text-gray-500 hover:text-gray-900"
						>
							Home
						</a>
						<a
							href="#opportunities"
							className="text-base font-bold text-gray-500 hover:text-gray-900"
						>
							Investment Opportunities
						</a>
						<Link href="projects">
							<a className="text-base font-bold text-gray-500 hover:text-gray-900">
								Our Projects
							</a>
						</Link>
						<a
							href="#contact"
							className="text-base font-bold text-gray-500 hover:text-gray-900"
						>
							Contact Us
						</a>
					</nav>
				</div>
			</div>
			<div
				className={
					mobileMenuIsOpen
						? "absolute top-0 inset-x-0 transition transform origin-top-right md:hidden z-10"
						: "absolute top-0 inset-x-0 transition transform origin-top-right hidden z-10"
				}
			>
				<div className=" shadow-md ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
					<div className="pt-5 pb-6 px-5">
						<div className="flex items-center justify-between">
							<div>
								<Link href="#">
									<a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
										<img className="h-8 w-auto sm:h-10" src="logo.png" alt="" />
									</a>
								</Link>
							</div>
							<div className="-mr-2">
								<button
									onClick={toggleclassName}
									type="button"
									className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
								>
									<span className="sr-only">Close menu</span>

									<svg
										className="h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
						</div>
						<div className="mt-6">
							<nav className="grid gap-y-8">
								<a
									href="#"
									className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
								>
									<svg
										className="flex-shrink-0 h-6 w-6 text-indigo-600"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
										/>
									</svg>
									<span className="ml-3 text-base font-medium text-gray-900">
										Home
									</span>
								</a>

								<a
									href="#"
									className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
								>
									<svg
										className="flex-shrink-0 h-6 w-6 text-indigo-600"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
										/>
									</svg>
									<span className="ml-3 text-base font-medium text-gray-900">
										Investment Opportunities
									</span>
								</a>

								<a
									href="#"
									className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
								>
									<svg
										className="flex-shrink-0 h-6 w-6 text-indigo-600"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
										/>
									</svg>
									<span className="ml-3 text-base font-medium text-gray-900">
										Our Projects
									</span>
								</a>

								<a
									href="#"
									className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
								>
									<svg
										className="flex-shrink-0 h-6 w-6 text-indigo-600"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
										/>
									</svg>
									<span className="ml-3 text-base font-medium text-gray-900">
										Contact Us
									</span>
								</a>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
