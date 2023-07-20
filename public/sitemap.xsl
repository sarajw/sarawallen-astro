<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="/styles/xml.css"/>
      </head>
      <body>
        <header>
          <h1>Sitemap</h1>
        </header>
        <main>
          <div>
            <h2>Main</h2>
            <xsl:for-each select="/sitemap:urlset/sitemap:url">
              <xsl:if test="not(contains(sitemap:loc, 'basic'))">
                <p>
                  <a>
                    <xsl:attribute name="href">
                      <xsl:value-of select="sitemap:loc"/>
                    </xsl:attribute>
                    <xsl:value-of select="substring-after(sitemap:loc, '.dev')"/>
                  </a>
                </p>
              </xsl:if>
            </xsl:for-each>
          </div>
          <div>
            <h2>Basic</h2>
            <xsl:for-each select="/sitemap:urlset/sitemap:url">
              <xsl:if test="contains(sitemap:loc, 'basic')">
                <p>
                  <a>
                    <xsl:attribute name="href">
                      <xsl:value-of select="sitemap:loc"/>
                    </xsl:attribute>
                    <xsl:value-of select="substring-after(sitemap:loc, '.dev')"/>
                  </a>
                </p>
              </xsl:if>
            </xsl:for-each>
          </div>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>