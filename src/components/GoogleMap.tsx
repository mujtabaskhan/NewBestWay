"use client";

export default function GoogleMap() {
  const businessName = "New Bestway Inc";
  const address =
    "1290 Eglinton Ave E, Suite 4, Mississauga ON L4W 1K8, Canada";
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6045.217597539713!2d-73.98517227456958!3d40.74863280672389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9bb853f49%3A0x3da55bc6c02918a8!2s1%20W%2034th%20St.%20Rm%20201%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2s!4v1772223428112!5m2!1sen!2s";

  return (
    <section
      className="w-full bg-white relative z-10"
      style={{ width: "100%" }}
    >
      <div className="relative w-full">
        

        <div
          className="w-full overflow-hidden shadow-lg rounded-lg"
          style={{ width: "100%", height: "500px" }}
        >
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="500"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Veritas Accounting Location Map"
          />
        </div>
      </div>
    </section>
  );
}