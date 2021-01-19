import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    Providers.Cognito({
      clientId: process.env.COGNITO_ID,
      clientSecret: process.env.COGNITO_SECRET,
      domain: process.env.COGNITO_DOMAIN,
    })
  ],
}

export default (req, res) => NextAuth(req, res, options)
