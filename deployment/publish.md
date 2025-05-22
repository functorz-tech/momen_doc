# Publish Application

After building your web application, click the **[Publish]** button at the top right of the Editor to deploy and publish your app with one click.

## Preview

Use **[Preview]** to generate the latest version of your web application. The publish interface will display a QR code and a test version link. Scan the QR code or click the link to experience and debug your app in a real environment.

![preview](../.gitbook/assets/publish/preview.jpeg)

## Publish

After debugging, click **[Go to Publish]** to publish your web page online. This generates a new official QR code and an online version link.

![publish](../.gitbook/assets/publish/publish.jpeg)

## Publish with Custom Domain

Custom domains are supported for Basic Plan and above.

### Benefits

1. **Enhance Brand Identity:** A custom domain presents a professional image, making your site more memorable and trustworthy.
2. **SEO Advantages:** Custom domains can improve search engine trust and boost rankings.

### When to Use

1. **Corporate Website:** For businesses quickly building official sites, enhancing credibility and SEO.
2. **User Portal:** For companies integrating custom domains with existing systems, providing a unified, branded portal.

### How to Use

1. **Enter Your Domain**  
   Enter a domain you own. Ensure it is not used elsewhere.

2. **Domain Verification**  
   Momen generates records based on your domain. Add these to your DNS provider (e.g., Cloudflare):
   - Add a TXT record as instructed.
   - After adding, return to the custom domain page and verify. If successful, proceed.

   ![Momen custom domain txt records](../.gitbook/assets/publish/cd-1.png)  
   ![Momen custom domain txt records](../.gitbook/assets/publish/mcd-2.jpeg)

3. **Certificate and Proxy Verification**  
   Configure TXT and CNAME records to validate the certificate and point your domain to Momen’s proxy. For some DNS providers (e.g., Cloudflare), disable proxy and use DNS only for the CNAME record.
   - Return to the settings page and verify. Upon success, proceed.

   ![Momen custom domain CNAME records](../.gitbook/assets/publish/cd-3.png)  
   ![Momen custom domain CNAME records](../.gitbook/assets/publish/mcd-3.jpeg)

4. **Web Favicon**  
   Upload a custom favicon. Save and publish the project again for the custom domain to take effect.

   ![Momen custom domain web favicon](../.gitbook/assets/publish/cd-5.png)

#### Notes

1. **Default Custom Domain:** If multiple domains exist, set one as default. Others will redirect to it.
2. **Editing a Custom Domain:** Unsaved configurations are retained for 24 hours. Once saved, only the icon can be modified.
3. **Deleting a Custom Domain:** If all are deleted, the app reverts to the Momen domain.
4. **Adding Records:** For some DNS providers, disable proxy and use DNS only for the CNAME record.
5. **Reconfigure Custom Domain:** Projects configured before January 17, 2025, must delete and reconfigure the domain, then republish for changes to take effect.
