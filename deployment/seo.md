---
description: >-
  Learn how to achieve SEO optimization, improve search engine keyword rankings, and gain more Data Outflow.
---

# SEO
SEO (Search Engine Optimization) refers to the practice of optimizing a website's structure and content to improve keyword rankings in search engines, attract more users to the site, and gain more Data Outflow.

SEO is a comprehensive and ongoing task. Momen provides developers with a rich and easy-to-use set of configuration tools, including:

* Rendering Pattern

* Sitemap

* robots.txt

* Custom header/body

* H tags

* ...

Note: Before using SEO features, you need to have a certain understanding of SEO-related background knowledge. You can find specific information through publicly available online resources.

## Configuration Tutorial

Open "Settings" and go to "SEO". Note that all configurations here will only take effect after the **Project is Published**:

![](<../.gitbook/assets/seo/seo0.png>)

### Global Settings

This part of the configuration will affect all pages of the Project.

#### 1. Rendering Pattern

![](<../.gitbook/assets/seo/seo1.png>)

Rendering patterns refers to the timing and method of rendering pages, directly affecting the performance and SEO of all pages. Momen offers three patterns:

* **Client-Side Rendering (CSR)**: Pages are rendered in the browser, resulting in slow initial load speed and poor SEO performance.

* **Server-Side Rendering (SSR)**: Pages are rendered on the server and then sent to the browser, resulting in fast initial load speed and better SEO performance.

* **Static Site Generation (SSG)**: All pages are rendered and saved on the server when the Project is published. When requested, the pre-generated pages are accessed directly. This eliminates the rendering step, resulting in very fast initial load  speed and excellent SEO performance.

|        | Client-Side Rendering (CSR)                 | Server-Side Rendering (SSR)                   | Static Site Generation (SSG)                             |
| ------ | --------------------------- | ----------------------------- | --------------------------------------- |
| When is the page rendered? | Browser                         | Server                           | Generated and saved on the server at Project publication                         |
| Initial load speed | Slow                           | Fast                             | Very fast                                      |
| Content dynamism  | High                           | High                             | Low                                       |
| SEO performance  | Poor                           | Strong                             | Strong                                       |
| Suitable scenarios  | Projects with low requirements for initial load speed and SEO: internal management systems, etc. | Projects with frequent content updates and high SEO requirements: e-commerce sites, news portals, etc. | Projects with infrequent content updates and very high requirements for web performance and SEO: blogs, documentation sites, marketing landing pages, etc. |

In the generated pages, you can check the generation method in the head of the HTML:

![](<../.gitbook/assets/seo/seo2.png>)

For more detailed information on CSR, SSR, and SSG, please refer to publicly available online resources.

#### 2. Range of Path Parameters

The range of path parameters directly determines the address of the webpage (see [Parameter](https://docs.momen.app/data/parameter) for details) and will affect SEO in the following two aspects:

* Sitemap: Links included can be generated using path parameters

* Page Generation: In SSG, since pages need to be pre-generated at publication, the system will generate pages based on the set range of path parameters.

Sources of path parameters values include:

* **Static Data**: Manually input fixed values

* **Database**: Dynamically obtain values from the database, requiring table and field selection, and filter configuration

**Static data and database data will be used together to generate sitemaps and pages**

![](<../.gitbook/assets/seo/seo3.png>)

![](<../.gitbook/assets/seo/seo4.png>)

#### 3. Sitemap

A sitemap is used to inform search engines about the pages on a website, helping them better understand the overall structure of the site and improve crawling efficiency and accuracy.

Momen provides two generation modes: real-time generation and pre-generation.

* Real-time update: After a user visits a page, the URL of that page and the URLs of all navigation target pages within it are included in the sitemap.

  * Advantage: High dynamism

  * Disadvantage: The sitemap may be incomplete, causing some pages (e.g., pages that have not been navigated to) not to be crawled by search engines.

* Pre-generation: At Project publication, a fixed sitemap is generated based on the path parameters range set in the previous step.

  * Advantage: Ensures all sites are included in the sitemap (provided the path parameters is set correctly).

  * Disadvantage: Low dynamism, requiring re-publication to regenerate the sitemap after each data change.

![](<../.gitbook/assets/seo/seo5.png>)

#### 4. Robots.txt

The robots.txt file is placed in the root directory of the website. Its function is to inform search engine crawlers which pages can be crawled and which cannot. Simply put, it acts as a "gatekeeper" for the website, controlling the access permissions of search engine crawlers.

![](<../.gitbook/assets/seo/seo6.png>)

#### 5. Custom header/body

Used to add additional tags (\<meta />, \<canonical />, etc.) in the HTML Header and Body to help search engines understand your website. Besides SEO, this feature can also be used for code injection (e.g., when using Baidu or Google site tools).

For more tips on adding custom content in HTML, please search for online tutorials.

![](<../.gitbook/assets/seo/seo7.png>)

### Page Settings

This part of the configuration will only take effect on a specific page.

#### 1. SEO TDK

This feature is used to set the Title, Description, and Keywords for a page, helping search engines better understand the webpage.

![](<../.gitbook/assets/seo/seo8.png>)

#### 2. Social Media Content

This feature is used to set the content displayed on social media (Facebook, X, etc.) for the webpage. Strictly speaking, it is not part of SEO, but configuring it well in addition to basic SEO optimization can be more beneficial for exposure and dissemination on social networks, aligning with the purpose of SEO optimization.

Momen provides two protocols:

* **Open graph**: A general protocol effective on most social media platforms

* **X cards**: X platform protocol, only supported on the X platform

Both protocols can be configured together and will take effect.

![](<../.gitbook/assets/seo/seo9.png>)

#### 3. H tags

H tags are important elements used to identify the content and hierarchy of a website page, and search engines index websites based on H tags.

![](<../.gitbook/assets/seo/seo10.png>)

#### 4. ALT of images

The Alt attribute is used to help search engines understand images.

![](<../.gitbook/assets/seo/seo11.png>)

### Publish the Project to Make the Configuration Effective
All configurations in SEO take effect after the **Project is Published**.

![](<../.gitbook/assets/seo/seo12.png>)

## Function Boundaries

The capabilities of SEO are strongly associated with the rendering mode, and the modes supported by different versions of the Project are as follows:

|         | Free Version | Basic Plan     | Pro Plan     | Single Tenant Sever      |
| ------- | --- | ------- | ------- | ----------- |
| Supported Rendering Patterns | CSR | CSR, SSG | CSR, SSG | CSR, SSR, SSG |

In CSR, page configurations (TDK, social media, etc.) cannot be used.