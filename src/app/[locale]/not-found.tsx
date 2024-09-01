import Link from "next/link";
import React, { ReactNode } from "react";
import { Col, Flexbox, Row, Section } from "@/Library/Grids/Grids";
import { NotFoundBox } from "@/Library/_Pages/notfound/NotFound.style";

export default function NotFoundPage(): ReactNode {
	return (
		<>
			<Section>
				<Row justify={"center"} aligncenter={"center"}>
					<Col lg={7}>
						<NotFoundBox>
							<h1>404</h1>
							<h2>Page Not Found</h2>
							<p>
								Vitae, varius dictum nunc aliquet eget sapien mauris ullamcorper senectus sit tempor
								placerat sem egestas mattis feugiat sit quisque ornare sodales.
							</p>
							<Flexbox justify={"center"}>
								<Link href="/">Back to Homepage</Link>
							</Flexbox>
						</NotFoundBox>
					</Col>
				</Row>
			</Section>
		</>
	);
}
