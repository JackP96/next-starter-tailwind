import Image from "next/image";

export default function IndexPage() {
	return (
		<>
			<div className=" bg-lightBlue flex flex-col items-center justify-center space-y-6 py-6 font-montserrat">
				<div className="h-48 max-w-90 lg:max-w-screen-lg w-full relative shadow-xl">
					<Image
						src="/HomeImage.jpg"
						alt="Four one-eyed aliens playing"
						layout="fill"
						className="object-cover"
						priority
					/>
				</div>
				<div className="max-w-90 flex flex-wrap">
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
			<div className="  flex flex-col items-center justify-center space-y-6 py-6 font-montserrat">
				<div className="max-w-90 flex flex-wrap space-y-6">
					<div>
						<h2 className="font-merriweather text-xl font-semibold">
							We Know the Structures that Worked For Us
						</h2>
						<p>
							Let’s make them work for you. With options for land banking,
							mezzanine investments and more, Built Capital features an array of
							real estate investment opportunities.
						</p>
					</div>
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
						<p>Our team can invest or arrange corporate debt and/or equity.</p>
					</div>
					<div class="et_pb_text_inner">
						<h3>Model Home Leaseback</h3>
						<p>Free up your balance sheet by selling us your model homes.</p>
					</div>
				</div>
				<div className="h-48 lg:max-w-screen-lg w-full relative">
					<Image
						src="/Southern-States-1.svg"
						alt="Four one-eyed aliens playing"
						layout="fill"
						className="object-cover"
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
				<div className="h-56 max-w-90 lg:max-w-screen-lg w-full relative shadow-xl">
					<Image
						src="/Levi-Headshot00795-scaled.jpg"
						alt="Four one-eyed aliens playing"
						layout="fill"
						className="object-cover"
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
							<h1 className="text-center">Contact Us</h1>
						</div>
						<div
							id="et_pb_contact_form_0"
							class="et_pb_module et_pb_contact_form_0 et_pb_contact_form_container clearfix"
							data-form_unique_num="0"
						>
							<div class="et-pb-contact-message"></div>

							<div class="w-64 bg-lightBlue mx-auto p-4">
								<form
									class="et_pb_contact_form clearfix"
									method="post"
									action="https://builttoinvest.com/"
									_lpchecked="1"
								>
									<p
										class="et_pb_contact_field et_pb_contact_field_0 et_pb_contact_field_half"
										data-id="name"
										data-type="input"
									>
										<label
											for="et_pb_contact_name_0"
											class="et_pb_contact_form_label"
										>
											Name
										</label>
										<input
											type="text"
											id="et_pb_contact_name_0"
											class="input"
											value=""
											name="et_pb_contact_name_0"
											data-required_mark="required"
											data-field_type="input"
											data-original_id="name"
											placeholder="Name"
										/>
									</p>
									<p
										class="et_pb_contact_field et_pb_contact_field_1 et_pb_contact_field_half et_pb_contact_field_last"
										data-id="email"
										data-type="email"
									>
										<label
											for="et_pb_contact_email_0"
											class="et_pb_contact_form_label"
										>
											Email Address
										</label>
										<input
											type="text"
											id="et_pb_contact_email_0"
											class="input"
											value=""
											name="et_pb_contact_email_0"
											data-required_mark="required"
											data-field_type="email"
											data-original_id="email"
											placeholder="Email Address"
										/>
									</p>
									<p
										class="et_pb_contact_field et_pb_contact_field_2 et_pb_contact_field_last"
										data-id="message"
										data-type="text"
									>
										<label
											for="et_pb_contact_message_0"
											class="et_pb_contact_form_label"
										>
											Message
										</label>
										<textarea
											name="et_pb_contact_message_0"
											id="et_pb_contact_message_0"
											class="et_pb_contact_message input"
											data-required_mark="required"
											data-field_type="text"
											data-original_id="message"
											placeholder="Message"
										></textarea>
									</p>
									<input
										type="hidden"
										value="et_contact_proccess"
										name="et_pb_contactform_submit_0"
									/>
									<div class="et_contact_bottom_container">
										<button
											type="submit"
											name="et_builder_submit_button"
											class="et_pb_contact_submit et_pb_button"
										>
											Submit
										</button>
									</div>
									<input
										type="hidden"
										id="_wpnonce-et-pb-contact-form-submitted-0"
										name="_wpnonce-et-pb-contact-form-submitted-0"
										value="bd36c82a35"
									/>
									<input type="hidden" name="_wp_http_referer" value="/" />
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
