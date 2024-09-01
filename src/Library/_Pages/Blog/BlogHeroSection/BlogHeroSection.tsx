import axios from 'axios';
import React from 'react';
import { Section } from '@/Library/Grids/Grids';
import { Display1 } from '@/Library/Typography/Typography';
import {
	BlogHero,
	BlogHeroCaption,
	BlogHeroHeader,
} from '@/Library/_Pages/Blog/BlogHeroSection/BlogHeroSection.styles';
import { SpanStyles } from '@/Library/_Pages/HomeSection/HeroSection/HomeHeroSection.styles';
import { useTranslations } from 'next-intl';
import { Blog } from '../../../../../BlogType';

interface BlogPageProps {
	blogs: Blog[];
}

export async function getServerSideProps() {
	const { data } = await axios.get<Blog[]>('your-api-endpoint-here');

	return {
		props: {
			blogs: data,
		},
	};
}

const BlogHeroSection: React.FC<BlogPageProps> = ({ blogs }) => {
	const t = useTranslations('Blog.HeroSection');

	return (
		<BlogHero>
			<Section>
				<BlogHeroHeader>
					<Display1>
						<SpanStyles>{t('Heading')}</SpanStyles>
					</Display1>
					{/* <BlogHeroCaption>{t('Body')}</BlogHeroCaption> */}
				</BlogHeroHeader>
				{blogs.map(blog => (
					<div key={blog.id}>
						<h2>{blog.title}</h2>
						<img src={blog.imageUrl} alt={blog.title} />
						{blog.BlogDetailes.map(detail => (
							<div key={detail.id}>
								<h3>{detail.title}</h3>
								<ul>
									{detail.BlogDetailesPoint.map(point => (
										<li key={point.id}>{point.text}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				))}
			</Section>
		</BlogHero>
	);
};

export default BlogHeroSection;
