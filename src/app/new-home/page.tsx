import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Paintbrush, BookOpen, Frame, ShoppingBag } from "lucide-react";

const MEMBERSHIP_URL = "https://www.zeffy.com/en-US/ticketing/union-county-community-arts-council-memberships";
const DONATE_URL = "https://www.zeffy.com/en-US/donation-form/donate-to-the-union-county-community-arts-council";

const buildingPhotos = [
  "IMG_6017.jpg","IMG_6018.jpg","IMG_6019.jpg","IMG_6020.jpg","IMG_6021.jpg","IMG_6022.jpg",
  "IMG_6023.jpg","IMG_6024.jpg","IMG_6025.jpg","IMG_6026.jpg","IMG_6027.jpg","IMG_6028.jpg",
  "IMG_6029.jpg","IMG_6030.jpg","IMG_6031.jpg","IMG_6032.jpg","IMG_6033.jpg",
];

export const metadata: Metadata = {
  title: "A New Home | Union County Community Arts Council",
  description:
    "The Union County Community Arts Council is moving to a new space — more room for exhibitions, programs, and community. Follow the journey.",
};

export default function NewHomePage() {
  return (
    <div className="pb-24">

      {/* Breadcrumb */}
      <div className="section-pad border-b border-parchment/10 py-3">
        <div className="mx-auto max-w-[1500px]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.18em] text-parchment/50 transition hover:text-parchment"
          >
            <ArrowLeft size={13} />
            Home
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(192,84,42,0.18),transparent_55%)]" />
        <div className="section-pad relative py-20">
          <div className="mx-auto max-w-[1500px]">
            <p className="text-[0.68rem] uppercase tracking-[0.22em] text-terracotta">Announcement</p>
            <h1 className="editorial-title mt-3 text-5xl leading-[0.93] md:text-7xl lg:text-[5.5rem]">
              A New Home
            </h1>
            <p className="mt-5 max-w-xl text-base text-parchment/70 leading-relaxed md:text-lg">
              The Union County Community Arts Council is moving — and we want you to be part of the journey.
            </p>
            <div className="mt-8 h-px w-full bg-gradient-to-r from-terracotta/60 via-terracotta/20 to-transparent" />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="section-pad py-14">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-[1fr_320px]">

            {/* Main copy */}
            <div className="space-y-6 text-base leading-relaxed text-parchment/80 md:text-lg">
              <p>
                After years of building something meaningful in this community, the Union County
                Community Arts Council is stepping into a new space — one that gives us the room
                to grow in the ways we&apos;ve always envisioned.
              </p>
              <p>
                This move is more than logistical. It&apos;s a signal of what&apos;s possible: more
                exhibitions, expanded programming, and a genuine gathering place for the
                creativity Union County has to offer. Our new home will open more doors — for
                artists, students, families, and everyone who believes in the power of the arts
                to connect us.
              </p>
              <p>
                In the coming weeks and months, we&apos;ll bring you along as the space takes shape.
                You&apos;ll see the transformation in real time — the people behind it, the milestones
                along the way, and the moment the doors finally open. Follow us on{" "}
                <a
                  href="https://www.facebook.com/profile.php?id=61574355290119"
                  target="_blank"
                  rel="noreferrer"
                  className="text-terracotta hover:underline"
                >
                  Facebook
                </a>{" "}
                for behind-the-scenes updates as the journey unfolds.
              </p>
              <p>
                This is a community moment. Our artists, supporters, and neighbors are all part
                of this story — and we can&apos;t wait to celebrate the opening with you.
              </p>
              <p className="text-parchment/60">
                The best chapter is just beginning.
              </p>
            </div>

            {/* Sidebar: new address */}
            <div className="space-y-5">
              <div className="border border-terracotta/30 bg-parchment/[0.045] p-7">
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-terracotta mb-4">Our New Address</p>
                <div className="flex items-start gap-3">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-terracotta/60" />
                  <div className="text-sm text-parchment/80 leading-relaxed">
                    <p>300 North Hayne Street</p>
                    <p>Monroe, NC 28112</p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=300+North+Hayne+Street+Monroe+NC+28112"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-block text-[0.68rem] uppercase tracking-[0.14em] text-terracotta hover:underline"
                >
                  Get Directions →
                </a>
              </div>

              <div className="border border-parchment/15 bg-parchment/[0.045] p-7">
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-parchment/50 mb-3">Stay Updated</p>
                <p className="text-sm text-parchment/65 leading-relaxed">
                  Follow us on Facebook for behind-the-scenes glimpses, progress updates, and opening announcements.
                </p>
                <a
                  href="https://www.facebook.com/profile.php?id=61574355290119"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block border border-parchment/30 px-4 py-2 text-[0.68rem] uppercase tracking-[0.14em] text-parchment/70 transition hover:border-terracotta hover:text-parchment"
                >
                  Follow on Facebook
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* What's Coming */}
      <div className="theme-band section-pad py-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-10">
            <div className="mb-6 h-px w-full bg-gradient-to-r from-terracotta/30 via-parchment/10 to-transparent" />
            <p className="text-[0.68rem] uppercase tracking-[0.22em] text-terracotta">What&rsquo;s Coming</p>
            <h2 className="editorial-title mt-3 text-4xl text-parchment md:text-5xl">Inside the New Space</h2>
            <p className="mt-4 max-w-xl text-sm text-parchment/60 leading-relaxed">
              Our new home at 300 North Hayne Street is being built for the full creative life of this community. Here&rsquo;s what we&rsquo;re bringing to life.
            </p>
          </div>
          <div className="grid gap-px bg-parchment/10 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: Paintbrush,
                label: "Artist Studios",
                body: "Dedicated studio spaces available for working artists — a place to create, focus, and be part of a creative community.",
              },
              {
                icon: BookOpen,
                label: "Teaching Studios",
                body: "Flexible learning spaces for classes and workshops across all ages and abilities, from beginners to seasoned creatives.",
              },
              {
                icon: Frame,
                label: "Gallery",
                body: "A professional exhibition space for regional artists and traveling shows — celebrating the full breadth of what art can be.",
              },
              {
                icon: ShoppingBag,
                label: "The Shop",
                body: "A curated space to browse and purchase original work, prints, and handmade goods directly from local artists.",
              },
            ].map(({ icon: Icon, label, body }) => (
              <div key={label} className="bg-[rgb(var(--theme-surface)_/_0.58)] p-8 space-y-4">
                <div className="flex h-10 w-10 items-center justify-center border border-terracotta/30 bg-terracotta/10">
                  <Icon size={16} className="text-terracotta" />
                </div>
                <p className="text-[0.68rem] uppercase tracking-[0.2em] text-parchment/70">{label}</p>
                <p className="text-sm text-parchment/55 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={MEMBERSHIP_URL} target="_blank" rel="noreferrer" className="accent-btn">
              Become a Founding Member
            </a>
            <Link href="/contact" className="ghost-btn">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Building Progress Photos */}
      <div className="section-pad py-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-4 h-px w-full bg-gradient-to-r from-terracotta/30 via-parchment/10 to-transparent" />
          <p className="text-[0.68rem] uppercase tracking-[0.22em] text-terracotta mb-2">In Progress</p>
          <h2 className="editorial-title mt-2 text-4xl text-parchment md:text-5xl mb-8">Building Updates</h2>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {buildingPhotos.map((photo) => (
              <div key={photo} className="relative aspect-square overflow-hidden bg-black/30">
                <Image
                  src={`/building/${photo}`}
                  alt="Building progress photo"
                  fill
                  className="object-cover transition duration-500 hover:scale-105 hover:opacity-90"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 17vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Support CTA with QR codes */}
      <div className="theme-band section-pad py-14">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-4 h-px w-full bg-gradient-to-r from-terracotta/30 via-parchment/10 to-transparent" />
          <p className="text-[0.68rem] uppercase tracking-[0.22em] text-parchment/40 mb-8">Support the Journey</p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="border border-terracotta/30 bg-parchment/[0.045] p-8 flex flex-col items-center text-center">
              <p className="text-[0.68rem] uppercase tracking-[0.22em] text-terracotta mb-1">Make a Donation</p>
              <p className="mt-2 text-sm text-parchment/60 leading-relaxed max-w-xs mb-6">
                Every gift helps bring our new home to life. Scan to donate or click below.
              </p>
              <a href={DONATE_URL} target="_blank" rel="noreferrer" className="inline-block transition hover:opacity-75">
                <Image src="/qr-donate.png" alt="Scan to donate" width={160} height={160} />
              </a>
              <a href={DONATE_URL} target="_blank" rel="noreferrer" className="mt-5 inline-block border border-terracotta px-5 py-2 text-[0.72rem] uppercase tracking-[0.18em] text-terracotta transition hover:bg-terracotta hover:text-parchment">
                Donate Now
              </a>
            </div>
            <div className="border border-parchment/20 bg-parchment/[0.045] p-8 flex flex-col items-center text-center">
              <p className="text-[0.68rem] uppercase tracking-[0.22em] text-parchment/60 mb-1">Become a Member</p>
              <p className="mt-2 text-sm text-parchment/60 leading-relaxed max-w-xs mb-6">
                Founding memberships are open now. Scan to join or click below.
              </p>
              <a href={MEMBERSHIP_URL} target="_blank" rel="noreferrer" className="inline-block transition hover:opacity-75">
                <Image src="/qr-membership.png" alt="Scan to become a member" width={160} height={160} />
              </a>
              <a href={MEMBERSHIP_URL} target="_blank" rel="noreferrer" className="mt-5 inline-block bg-terracotta px-5 py-2 text-[0.72rem] uppercase tracking-[0.18em] text-parchment transition hover:bg-terracotta/85">
                Join Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="section-pad pb-24">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-4 h-px w-full bg-gradient-to-r from-terracotta/30 via-parchment/10 to-transparent" />
          <p className="mb-5 text-[0.68rem] uppercase tracking-[0.22em] text-parchment/40">Find Us</p>
          <div className="overflow-hidden border border-parchment/15 aspect-[16/7]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1775845512145!6m8!1m7!1s8DlSB1FtnLg3RrhnCrwFCQ!2m2!1d34.98290750404062!2d-80.54950402759681!3f132.21760578911346!4f-1.2581472799853088!5f0.7820865974627469"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="300 North Hayne Street, Monroe, NC"
            />
          </div>
          <div className="mt-3 flex items-center justify-between">
            <p className="text-xs text-parchment/35">300 North Hayne Street · Monroe, NC 28112</p>
            <a
              href="https://maps.google.com/?q=300+North+Hayne+Street+Monroe+NC+28112"
              target="_blank"
              rel="noreferrer"
              className="text-[0.68rem] uppercase tracking-[0.14em] text-terracotta hover:underline"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
