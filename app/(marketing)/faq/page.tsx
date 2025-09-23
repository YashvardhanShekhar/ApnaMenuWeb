import type { Metadata } from 'next'
import FAQ from '../../../components/Faq/Faqpage'

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions | ApnaMenu',
  description: 'Get answers to common questions about ApnaMenu QR code digital menu system for restaurants and customers.',
  keywords: 'QR menu FAQ, digital menu questions, restaurant technology help, ApnaMenu support'
}

export default function FAQPage() {
  return (
    <>
      <FAQ />
    </>
  )
}
