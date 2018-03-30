import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>I’m learning to fly small planes. It gets me away from computers. Recently, I was battling to keep the Cessna 150 low enough as we approached Bristol Airport. I was quite literally being sucked up by a cloud. My flying instructor said, “it isn’t your fault, but it is your problem”. He meant it was my responsibility to maintain my height, even though something else was working against me. I needed to learn that this situation existed and how to fly my plane to deal with it.

Back on the ground I considered that the phrase “it isn’t your fault, but it is your problem” is a pretty good one for all kinds of situations. In this post I’m considering the issue of supporting older browsers when using new technology such as CSS Grid Layout. As developers we can often be a bit sheepish when discussing browser support with our clients and teams, as if it is our failure that the site won’t look identical in IE9 as the latest Firefox or Chrome. Instead we need to accept that this isn’t our fault. However the responsibility of dealing with this problem well, and in a way that benefits everyone, is very much our problem.

Grid is new! Surely it has terrible browser support?
CSS Grid Layout shipped into Chrome, Firefox, Opera and Safari in March of this year. Microsoft Edge currently have an updated Version of Grid available behind a flag in Preview builds. At the time of writing, Can I Use indicates a global availability of CSS Grid Layout of 65.64%, rising to 70.75% if you include the prefixed version in IE10, 11 and current Edge. This is a rate of adoption we’ve never seen before for such a huge feature. It isn’t surprising that people don’t realise how many visitors will have support.

It should go without saying, but I will say it anyway, your usage stats may be lower or higher, depending on the audience for your site. However, if you are building a new site right now there is a very good case to be made for taking advantage of CSS Grid Layout.

Why would I use Grid?
As explained in a previous post, CSS Grid Layout enables two-dimensional layout without requiring the additional markup for row wrappers. As a two dimensional layout method you can cause elements in your design to span rows, in a predictable and robust way.

You can achieve some nice design effects. For example having items in your design that are at least a particular height but will still expand to contain content that is taller - shown in this demo.

You can easily mix fixed width elements with flexible units, with the fr unit in grid. This makes it easier to deal with items in your layout that you want to maintain at a fixed size.

You can redefine the layout from the grid container, making responsive design more straightforward, giving you the ability to fine tune the design at different breakpoints.

You can layer items on the grid, items respect z-index so you can cause different items to occupy the same grid cells with plenty of scope for creativity.

And non-supporting browsers?
CSS has the solution for you. To start with, defined in the Grid and Flexbox specifications are exactly how those specifications overwrite older layout methods.

Therefore if you want to use floats, inline-block, multiple-column layout, flexbox or even display: table as a fallback for your grid layout then the spec has you covered. You can overwrite those methods in a safe and predictable way. I made a cheatsheet explaining the fallbacks. I also cover several of these in my talk which was recorded at Render Conference earlier this year.

CSS also has Feature Queries. These have really great browser support, and the nice thing about Feature Queries is that you don’t need to concern yourself with the browsers that don’t support feature queries. There is no browser supporting Grid Layout and not supporting Feature Queries. What you need to do in your CSS file is:

Your fallback CSS
Your Grid CSS
All browsers will interpret the fallback CSS. The ones that do not support Grid will stop right there. The ones that do support Grid will use the Grid CSS, and due to the rules defined in the spec and detailed in my cheatsheet, a lot of the fallback behaviour will be nullified.

Generally you will then have a few things in the fallback CSS that will “leak through” to the grid layout. This is often widths on items as we need to assign widths to items in legacy layout to fake something that looks like it is using a grid. Therefore we use a simple feature query, checking for support of Grid Layout, and there we perhaps set widths back to auto. We can do anything else in there for the Grid version that would also be interpreted by older browsers.

We’re using CSS to do CSS. No polyfills, or hacks. This is all as defined in the specifications.

But fallbacks mean I’m writing the layout twice!
This is only true if you are labouring under the assumption that websites need to look the same in all browsers. Guess what? They don’t.

Here is a post I wrote in 2002. In 2002 people were avoiding learning how to use CSS for layout as it would mean their sites wouldn’t “look the same” in all browsers. However I was building sites using CSS for layout, trying to figure out how we could do that in the best possible way, and teaching other people the things I was learning. All while starting my own company, building websites for clients who wanted things to work in Netscape 4. I’ve been doing this for my entire career. I’ve been dealing with interoperability issues for 20 years. I currently have a product with a UI that has to be functional back to IE9. The existence of these old browsers has never been my fault, but it most certainly has been my problem and my job to deal with over all of these years.

If your website really needs to look the same in all browsers (whatever that means to you), you won’t be able to use any features only available by using Grid. In that case don’t use Grid Layout! Use Grid Layout if you want to achieve something that you can’t do in a good way with older technologies. Then create a fallback that gives a good experience to those less capable browsers rather than worrying about making it exactly the same. The power of Grid is that we can do things that were pretty much impossible before. Use Grid for that, not just to replicate your old design.

I want a magic polyfill
Globally polyfilling your entire layout is going to be a pretty nasty experience for your visitors. The things that grid does are not going to perform well using a JavaScript based solution. You will end up with a horrible jiggly loading experience. It is far better to provide those older browsers with a simpler experience, one tailored to their capabilities than try and force grid layout on them by way of JavaScript.

Trying to polyfill is likely to significantly increase your development and testing time, for a decreasing group of users. Again, if having an identical layout for everyone is the ultimate dream for your site, I’d suggest not using grid right now. You will have to accept that all of the users who could get the grid layout can’t have it due to the fact there are old browsers.

This is what it is to build for the web
</p>
    <Link to="/about/">Go to page 2</Link>
  </div>
)

export default IndexPage
