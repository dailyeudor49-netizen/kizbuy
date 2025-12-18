import { NextRequest, NextResponse } from 'next/server';

// Network API configuration per country
const NETWORK_CONFIGS: Record<string, { offer: string; lp: string }> = {
  pl: { offer: '3160', lp: '3194' },
  cz: { offer: '3162', lp: '3196' },
  hu: { offer: '3161', lp: '3195' },
  sk: { offer: '2626', lp: '2653' },
};

const NETWORK_API_URL = 'https://offers.uncappednetwork.com/forms/api/';
const NETWORK_UID = '0191b25c-22d2-7f55-9d9b-79b67cebbff3';
const NETWORK_KEY = 'e0fe8e75c501eccab21f8d';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { country, name, tel, address, tmfp, ua, utmParams } = body;

    // Validate country
    const config = NETWORK_CONFIGS[country];
    if (!config) {
      return NextResponse.json({ error: 'Invalid country' }, { status: 400 });
    }

    // Prepare form data for network API
    const networkData = new URLSearchParams();
    networkData.append('uid', NETWORK_UID);
    networkData.append('key', NETWORK_KEY);
    networkData.append('offer', config.offer);
    networkData.append('lp', config.lp);
    networkData.append('name', name);
    networkData.append('tel', tel);
    networkData.append('street-address', address);

    // Add fingerprint or user agent
    if (tmfp) {
      networkData.append('tmfp', tmfp);
    } else if (ua) {
      networkData.append('ua', ua);
    }

    // Add UTM parameters if present
    if (utmParams) {
      Object.entries(utmParams).forEach(([key, value]) => {
        if (value) networkData.append(key, value as string);
      });
    }

    // Send to network API
    const response = await fetch(NETWORK_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: networkData.toString(),
    });

    const result = await response.json();

    return NextResponse.json({
      success: true,
      message: result.message,
      code: result.code,
    });

  } catch (error) {
    console.error('Network API proxy error:', error);
    return NextResponse.json(
      { error: 'Failed to submit lead', success: false },
      { status: 500 }
    );
  }
}
