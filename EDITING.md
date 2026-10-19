# Customer Editing Guide — Anam & Zishan Wedding Invitation

This template is an Islamic Nikah & Walima invitation featuring rich gold and parchment styling, Arabic calligraphy (Dua), couple introduction cards, live countdown timer, multi-event cards with Google Maps, calendar export, contact links, and best compliments.

---

## Customer Changes

All routine customer edits are configured in:
→ [editable/wedding-data.js](file:///c:/invitestory/week7/zishan-anam/editable/wedding-data.js)

### Couple Profiles
Edit `couple.bride` and `couple.groom` in `editable/wedding-data.js`:
- `first` & `last`: First and last names (e.g. `"Anam"` & `"Sayeed"`, `"Zishan"`)
- `script`: Traditional Arabic/Urdu family script designation (e.g. `"Sayeed"`, `"Perwez"`)
- `parents`: Parents lineage line (e.g. `"Daughter of Haji Md Sayeed Alam"`, `"Son of Shahid Perwez"`)
- `note`: Personal biographical description
- `photo`: Path to photo (e.g. `"./editable/assets/bride.jpg"`)

### Events & Countdown
Edit `events` and `wedding` in `editable/wedding-data.js`:
- Event 1: Nikah Ceremony — December 12, 2026 at Hotel Sardar Garden, Nawada
- Event 2: Walima Ceremony — December 14, 2026 at Our Residence, Baldiha Jaynagar
- `dateISO`: Event timestamp in ISO 8601 (`"YYYY-MM-DDTHH:MM:SS+05:30"`). Drives the live countdown timer and Google Calendar export.

### Compliments & Contacts
- `complements`: Family complement sign-off (e.g. `"Shahid Perwez & Sanaullah"`)
- `contacts`: List of contact persons with name and phone number for calling.

### Photos & Accents
Replace files directly in `editable/assets/` or update `images`:
- Bride photo: `editable/assets/bride.jpg`
- Groom photo: `editable/assets/groom.jpg`
- Decorative graphics: `masjid.png`, `floral-corner.png`, `gold-flourish.png`, `mandala.png`, `paper-texture.jpg`

---

## Validation
Validate changes with:
```bash
node --check editable/wedding-data.js
node --check assets/index-DJiECBMo.js
```
