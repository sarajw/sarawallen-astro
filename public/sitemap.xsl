<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
      <link rel="stylesheet" href="/styles/xml.css"/>
      </head>
      <body>
        <h1>Sitemap</h1>
        <xsl:for-each select="/sitemap:urlset/sitemap:url">
          <p>
            <a>
              <xsl:attribute name="href">
                <xsl:value-of select="sitemap:loc"/>
              </xsl:attribute>
              <xsl:value-of select="substring-after(sitemap:loc, '.dev')"/>
            </a>
          </p>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>