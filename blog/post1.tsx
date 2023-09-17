import Image from 'next/image';

Post.metadata = {
    category: 'Travel',
    title: 'How to Live in a 57-Floor Riverside Condo with a Rooftop Office Lounge, 3 Swimming Pools, a Gym, a Golf Course, an Arcade, a Library, and a Private Park for $360 a Month.',
    date: '2023-09-16 23:29',
    author: 'Simon',
    authorImage: '/images/captain-tylor.jpg',
};

export default async function Post() {
    return (
        <>
            <div className="flex flex-col gap-6 justify-between px-4 mx-auto max-w-screen-xl text-gray-900 dark:text-gray-400" style={{ gap: '24px' }}>
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert flex flex-col gap-4">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.419645034808!2d100.47663647509248!3d13.873838086530869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ad4b986bed7%3A0xc407310b6ec1aef8!2sThe%20Politan%20Rive!5e0!3m2!1sen!2sus!4v1694872659853!5m2!1sen!2sus" height="450" className="border-none" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <p>I have lived it, here's how.</p>

                    <p>The place is called <b>The Politan Rive</b> and it's located in a city near Bangkok, Thailand called Nonthaburi.</p>

                    <p>The contracts start at 6 months which allow you to rent for 12,500 THB / mo excl. bills (~1200 THB / mo) for the electric and a water bill that is also low but I cannot remember how much it was. but I've heard even lower prices depending on the condo you choose i.e. floor, size etc.</p>

                    <p>You can also find condos in this complex on AirBnb for good rates.</p>

                    <p>The ideal setup, which I had is as follows: get a remote job e.g. web developer and move here. It's like living in a 5 star hotel every day.</p>

                    <p>Living in Nonthaburi has its merrits i.e. the immigration is not as crowded as the one in Bangkok so you're able to re-new your visa much quicker. The prices are also lower when you go to restaurants etc.</p>

                    <p>The major drawback is that it takes around an hour to get to the Bangkok city centre where all the clubs and bars are.</p>
                </article>
                <section className='flex flex-col gap-4'>
                    <h3 className='font-light text-gray-500 sm:text-xl dark:text-gray-400'>Tags</h3>
                    <div className='flex flex-wrap gap-1' style={{ marginLeft: '-10px', marginRight: '-10px' }}>
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded">Travelling</span>
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded">Thailand</span>
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded">Bangkok</span>
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded">Nontaburit</span>
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded">Remote Work</span>
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded">Web Development</span>
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded">Immigration</span>
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded">Visa</span>
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded">Affordable Living</span>
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded">Condo</span>
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded">Nightlife</span>
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded">City Centre</span>
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded">Restaurant</span>
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded">AirBnb</span>
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded">Lifestyle</span>
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded">Cost of Living</span>
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded">Tourism</span>
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded">Contracts</span>
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded">Digital Nomad</span>
                    </div>
                </section>
            </div>
        </>
    )
}