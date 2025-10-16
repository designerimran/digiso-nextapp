const server = process.env.NEXT_PUBLIC_API_DATA;

//================ All fetch data ================

export async function headerNavbar() {
  const result = await fetch(`${server}/navbar`, { next: { revalidate: 10 } });
  return result.json();
}
export async function home1Heading() {
  const result = await fetch(`${server}/home1/allheading`, { next: { revalidate: 10 } });
  return result.json();
}
export async function home1Banner() {
  const result = await fetch(`${server}/home1/banner`, { next: { revalidate: 10 } });
  return result.json();
}
export async function home1Feature() {
  const result = await fetch(`${server}/home1/feature`, { next: { revalidate: 10 } });
  return result.json();
}
export async function home1Testimonial() {
  const result = await fetch(`${server}/home1/testimonial`, { next: { revalidate: 10 } });
  return result.json();
}
export async function home1Project() {
  const result = await fetch(`${server}/home1/project`, { next: { revalidate: 10 } });
  return result.json();
}
export async function hom1Footer() {
  const result = await fetch(`${server}/home1/footer`, { next: { revalidate: 10 } });
  return result.json();
}
export async function textmarquee() {
  const result = await fetch(`${server}/textmarquee`, { next: { revalidate: 10 } });
  return result.json();
}


export async function home2(id) {
  const result = await fetch(`${server}/home2/${id}`, { next: { revalidate: 10 } });
  return result.json();
}
export async function home3(id) {
  const result = await fetch(`${server}/home3/${id}`, { next: { revalidate: 10 } });
  return result.json();
}

export async function about() {
  const result = await fetch(`${server}/about`, { next: { revalidate: 10 } });
  return result.json();
}
export async function testimonial() {
  const result = await fetch(`${server}/testimonial`, { next: { revalidate: 10 } });
  return result.json();
}

export async function getblog() {
  const result = await fetch(`${server}/blog`, { next: { revalidate: 10 } });
  return result.json();
}
export async function blogpage() {
  const result = await fetch(`${server}/blogpage`, { next: { revalidate: 10 } });
  return result.json();
}
export async function blogdetails(id) {
  const result = await fetch(`${server}/blogdetails/${id}`, { next: { revalidate: 10 } });
  return result.json();
}

export async function team() {
  const result = await fetch(`${server}/team`, { next: { revalidate: 10 } });
  return result.json();
}
export async function teampage() {
  const result = await fetch(`${server}/teampage`, { next: { revalidate: 10 } });
  return result.json();
}

export async function service() {
  const result = await fetch(`${server}/service`, { next: { revalidate: 10 } });
  return result.json();
}
export async function servicePage(id) {
  const result = await fetch(`${server}/servicePage/${id}`, { next: { revalidate: 10 } });
  return result.json();
}
export async function serviceDetails(id) {
  const result = await fetch(`${server}/serviceDetails/${id}`, { next: { revalidate: 10 } });
  return result.json();
}

export async function faqs() {
  const result = await fetch(`${server}/faq`, { next: { revalidate: 10 } });
  return result.json();
}


export async function calltoAction() {
  const result = await fetch(`${server}/calltoAction`, { next: { revalidate: 10 } });
  return result.json();
}

export async function portfolioPageheader() {
  const result = await fetch(`${server}/portfolio/pageheader`, { next: { revalidate: 10 } });
  return result.json();
}
export async function portfolioProject() {
  const result = await fetch(`${server}/portfolio/project`, { next: { revalidate: 10 } });
  return result.json();
}
export async function portfolioDetails(id) {
  const result = await fetch(`${server}/portfoliodetails/${id}`, { next: { revalidate: 10 } });
  return result.json();
}
export async function contact() {
  const result = await fetch(`${server}/contact`, { next: { revalidate: 10 } });
  return result.json();
}

export async function pricingheader() {
  const result = await fetch(`${server}/pricingpage/pageheader`, { next: { revalidate: 10 } });
  return result.json();
}
export async function pricing() {
  const result = await fetch(`${server}/pricingpage/pricing`, { next: { revalidate: 10 } });
  return result.json();
}


export async function career() {
  const result = await fetch(`${server}/career`, { next: { revalidate: 10 } });
  return result.json();
}
export async function careerdetails(id) {
  const result = await fetch(`${server}/careerdetails/${id}`, { next: { revalidate: 10 } });
  return result.json();
}

export async function workWithUs() {
  const result = await fetch(`${server}/workwithus`, { next: { revalidate: 10 } });
  return result.json();
}
export async function subsrcibenow() {
  const result = await fetch(`${server}/subsrcibenow`, { next: { revalidate: 10 } });
  return result.json();
}

export async function footer() {
  const result = await fetch(`${server}/footer`, { next: { revalidate: 10 } });
  return result.json();
}
export async function errorData() {
  const result = await fetch(`${server}/error`, { next: { revalidate: 10 } });
  return result.json();
}

