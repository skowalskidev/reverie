import Image from 'next/image';

Post.metadata = {
    title: 'Your Post Title',
    date: '2023-01-01',
    author: 'Simon',
    authorImage: '/images/profile.png',
};

export default async function Post() {
    return (
        <>
            <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                    <ol className="list-decimal list-inside">
                        <li>First</li>
                        <li>Second</li>
                    </ol>

                    <Image src="/images/profile.png" alt="Picture of the author" width={100} height={100} />

                    <p className="lead">Flowbite is an open-source library of UI components built with the utility-first
                        classes from Tailwind CSS. It also includes interactive elements such as dropdowns, modals,
                        datepickers.</p>
                    <p>Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way,
                        you can think things through before committing to an actual design project.</p>
                    <h2>When does design come in handy?</h2>
                    <p>While it might seem like extra work at a first glance, here are some key moments in which prototyping
                        will come in handy:</p>
                    <ol>
                        <li><strong>Usability testing</strong>. Does your user know how to exit out of screens? Can they
                            follow your intended user journey and buy something from the site you’ve designed? By running a
                            usability test, you’ll be able to see how users will interact with your design once it’s live;
                        </li>
                        <li><strong>Involving stakeholders</strong>. Need to check if your GDPR consent boxes are displaying
                            properly? Pass your prototype to your data protection team and they can test it for real;</li>
                        <li><strong>Impressing a client</strong>. Prototypes can help explain or even sell your idea by
                            providing your client with a hands-on experience;</li>
                        <li><strong>Communicating your vision</strong>. By using an interactive medium to preview and test
                            design elements, designers and developers can understand each other — and the project — better.
                        </li>
                    </ol>
                    <h3>Laying the groundwork for best design</h3>
                    <p>Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way,
                        you can think things through before committing to an actual design project.</p>
                    <p>Let's start by including the CSS file inside the <code>head</code> tag of your HTML.</p>
                    <h3>Understanding typography</h3>
                    <h4>Type properties</h4>
                    <p>A typeface is a collection of letters. While each letter is unique, certain shapes are shared across
                        letters. A typeface represents shared patterns across a collection of letters.</p>
                    <h4>Baseline</h4>
                    <p>A typeface is a collection of letters. While each letter is unique, certain shapes are shared across
                        letters. A typeface represents shared patterns across a collection of letters.</p>
                    <h4>Measurement from the baseline</h4>
                    <p>A typeface is a collection of letters. While each letter is unique, certain shapes are shared across
                        letters. A typeface represents shared patterns across a collection of letters.</p>
                    <h3>Type classification</h3>
                    <h4>Serif</h4>
                    <p>A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter.
                        Typefaces with serifs are called serif typefaces. Serif fonts are classified as one of the
                        following:</p>
                    <h4>Old-Style serifs</h4>
                    <ul>
                        <li>Low contrast between thick and thin strokes</li>
                        <li>Diagonal stress in the strokes</li>
                        <li>Slanted serifs on lower-case ascenders</li>
                    </ul><img src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-2.png" alt="" />
                    <ol>
                        <li>Low contrast between thick and thin strokes</li>
                        <li>Diagonal stress in the strokes</li>
                        <li>Slanted serifs on lower-case ascenders</li>
                    </ol>
                    <h3>Laying the best for successful prototyping</h3>
                    <p>A serif is a small shape or projection that appears at the beginning:</p>
                    <blockquote>
                        <p>Flowbite is just awesome. It contains tons of predesigned components and pages starting from
                            login screen to complex dashboard. Perfect choice for your next SaaS application.</p>
                    </blockquote>
                    <h4>Code example</h4>
                    <p>A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter.
                        Typefaces with serifs are called serif typefaces. Serif fonts are classified as one of the
                        following:</p>
                    <h4>Table example</h4>
                    <p>A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter.
                    </p>
                    <table>
                        <thead>
                            <tr>
                                <th>Country</th>
                                <th>Date &amp; Time</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>United States</td>
                                <td>April 21, 2021</td>
                                <td><strong>$2,300</strong></td>
                            </tr>
                            <tr>
                                <td>Canada</td>
                                <td>May 31, 2021</td>
                                <td><strong>$300</strong></td>
                            </tr>
                            <tr>
                                <td>United Kingdom</td>
                                <td>June 3, 2021</td>
                                <td><strong>$2,500</strong></td>
                            </tr>
                            <tr>
                                <td>Australia</td>
                                <td>June 23, 2021</td>
                                <td><strong>$3,543</strong></td>
                            </tr>
                            <tr>
                                <td>Germany</td>
                                <td>July 6, 2021</td>
                                <td><strong>$99</strong></td>
                            </tr>
                            <tr>
                                <td>France</td>
                                <td>August 23, 2021</td>
                                <td><strong>$2,540</strong></td>
                            </tr>
                        </tbody>
                    </table>
                    <h3>Best practices for setting up your prototype</h3>
                    <p><strong>Low fidelity or high fidelity?</strong> Fidelity refers to how close a prototype will be to
                        the real deal. If you’re simply preparing a quick visual aid for a presentation, a low-fidelity
                        prototype — like a wireframe with placeholder images and some basic text — would be more than
                        enough. But if you’re going for more intricate usability testing, a high-fidelity prototype — with
                        on-brand colors, fonts and imagery — could help get more pointed results.</p>
                    <p><strong>Consider your user</strong>. To create an intuitive user flow, try to think as your user
                        would when interacting with your product. While you can fine-tune this during beta testing,
                        considering your user’s needs and habits early on will save you time by setting you on the right
                        path.</p>
                    <p><strong>Start from the inside out</strong>. A nice way to both organize your tasks and create more
                        user-friendly prototypes is by building your prototypes ‘inside out’. Start by focusing on what will
                        be important to your user, like a Buy now button or an image gallery, and list each element by order
                        of priority. This way, you’ll be able to create a prototype that puts your users’ needs at the heart
                        of your design.</p>
                    <p>And there you have it! Everything you need to design and share prototypes — right in Flowbite Figma.
                    </p>
                </article>
            </div>
        </>
    )
}