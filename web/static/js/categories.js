const categoryData = [
    {
        key: 'agroforestry',
        type: 'agriculture',
        title: '🌳 1. Agro-forestry areas',
        badge: 'Agriculture', badgeClass: 'badge-agriculture',
        shortDesc: 'Landscapes where trees and crops coexist, creating a semi-natural ecosystem with both agricultural and woody vegetation.',
        desc: 'These are landscapes where trees, shrubs, and crops coexist with or complement each other, often integrated with livestock. Agro-forestry is a sustainable land-use system that enhances biodiversity, prevents soil erosion, and improves microclimates. Typical trees include olive, carob, almond, and citrus, while understory crops might be cereals or vegetables.',
        species: ['Olea europaea', 'Ceratonia siliqua', 'Almond', 'Citrus'],
        img1: { 
            src: 'static/images/Agro-Forestry-Satellite.png',
            label: 'Aerial view — agro-forestry landscape'
        },
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Brexia_and_Garcinia_%2814678137749%29.jpg/640px-Brexia_and_Garcinia_%2814678137749%29.jpg',
        img2label: 'Agro-Forestry example — mixed tree and crop cultivation',

        photos: [
            { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/KaffrineAgroforestry.jpg/640px-KaffrineAgroforestry.jpg', label: 'Agroforestry example' },
            { src: '/static/img/categories/agroforestry_3.jpg', label: 'Carob grove understory' },
            { src: '/static/img/categories/agroforestry_4.jpg', label: 'Mixed cereal and olive' },
        ],
    },
    {
        key: 'arable',
        type: 'agriculture',
        title: '🌾 2. Arable land',
        badge: 'Agriculture', badgeClass: 'badge-agriculture',
        shortDesc: 'Land used for seasonal crop production, regularly ploughed and replanted, with little permanent vegetation.',
        desc: 'Land actively used for seasonal crop cultivation, such as wheat, barley, maize, or vegetables. Arable land is usually intensively managed, with regular ploughing and harvesting. Natural vegetation is minimal, and soil fertility is maintained artificially. The visual landscape typically appears as uniform geometric fields.',
        species: ['Wheat', 'Barley', 'Maize', 'Potatoes', 'Tomatoes'],
        img1: { 
            src: 'static/images/Arable-Land-Satellite.png',
            label: 'Aerial view — arable fields'
        },
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Wheat_harvest.jpg/640px-Wheat_harvest.jpg',
        img2label: 'Wheat crop (Triticum aestivum)',
    },
    {
        key: 'beach',
        type: 'natural',
        title: '🏖️ 3. Beaches, dunes, sands',
        badge: 'Natural', badgeClass: 'badge-natural',
        shortDesc: 'Sandy environments with sparse, stress-tolerant vegetation adapted to salt, wind, and drought.',
        desc: 'Sandy coastal environments dominated by stress-tolerant vegetation adapted to high winds, salt spray, and low nutrient soils. These areas act as natural buffers against coastal erosion and may support small scattered shrubs or grasses, giving a sparse and open appearance.',
        species: ['Ammophila arenaria', 'Pancratium maritimum'],
        img1: { 
            src: 'static/images/Beaches-Dunes-Sands-Satellite.png',
            label: 'Aerial view — coastal dunes'
        },
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Aerial_of_sand_dunes.jpg/640px-Aerial_of_sand_dunes.jpg',
        img2label: 'Aerial view — coastal dunes',
    },
    {
        key: 'broadleaf',
        type: 'natural',
        title: '🌳 4. Broad-leaved forest',
        badge: 'Natural', badgeClass: 'badge-natural',
        shortDesc: 'Forests dominated by wide-leaf trees forming dense canopies and supporting rich biodiversity.',
        desc: 'Forests dominated by deciduous or evergreen broadleaf trees, often forming dense canopies. They support high biodiversity including shrubs, ferns, and herbaceous understory. These forests typically have multi-layered vegetation with clear stratification between canopy, understory, and ground flora.',
        species: ['Quercus spp.', 'Eucalyptus', 'Chestnut', 'Plane trees'],
        img1: { 
            src: 'static/images/Broad-Leaved-Forest-Satellite.png',
            label: 'Aerial view — broadleaf canopy'
        },
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Quercus_robur_in_Eastnor_Park.jpg/640px-Quercus_robur_in_Eastnor_Park.jpg',
        img2label: 'English oak (Quercus robur)',
    },
    {
        key: 'coastalwetland',
        type: 'water',
        title: '🌊 5. Coastal wetlands',
        badge: 'Water', badgeClass: 'badge-water',
        shortDesc: 'Wetlands near the coast influenced by saltwater, supporting vegetation adapted to saline conditions.',
        desc: 'Low-lying areas near the coast where soil is saturated by seawater, creating salt marshes and brackish habitats. Vegetation is specialised, including reeds, saltmarsh grasses, and succulents. These ecosystems provide critical services such as flood protection, nutrient filtration, and wildlife habitat.',
        species: ['Salicornia', 'Phragmites', 'Saltmarsh grasses'],
        img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Sa_Dragonera_island_-_salt_flats.jpg/640px-Sa_Dragonera_island_-_salt_flats.jpg',
        img1label: 'Aerial view — coastal salt flats',
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Salicornia_europaea_1.jpg/640px-Salicornia_europaea_1.jpg',
        img2label: 'Glasswort (Salicornia europaea)',
    },
    {
        key: 'complexcult',
        type: 'agriculture',
        title: '🌱 6. Complex cultivation patterns',
        badge: 'Agriculture', badgeClass: 'badge-agriculture',
        shortDesc: 'Highly fragmented agricultural landscapes with a mix of fields, trees, and natural patches.',
        desc: 'Land with small, irregularly shaped plots of mixed crops, orchards, and fallow patches. This pattern promotes biodiversity by interspersing cultivated and natural areas. Visually, the landscape appears fragmented, reflecting intensive but traditional farming systems.',
        species: ['Mixed crops', 'Fruit trees', 'Cereals', 'Vegetables'],
        img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Terrace_farming.jpg/640px-Terrace_farming.jpg',
        img1label: 'Aerial view — complex field patterns',
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Farmers_who_work_in_their_fields.jpg/640px-Farmers_who_work_in_their_fields.jpg',
        img2label: 'Mixed cultivation ground view',
    },
    {
        key: 'coniferous',
        type: 'natural',
        title: '🌲 7. Coniferous forest',
        badge: 'Natural', badgeClass: 'badge-natural',
        shortDesc: 'Forests dominated by needle-leaf trees, typically evergreen and adapted to poorer soils.',
        desc: 'Forests dominated by needle-leaf, cone-bearing trees such as pines, spruces, and cypresses. Understory vegetation is usually sparse, consisting of mosses, ferns, and low shrubs. The canopy tends to be uniform, giving a dense, dark-green appearance from above.',
        species: ['Pinus', 'Cupressus', 'Spruce', 'Fir'],
        img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Aerial_view_of_the_Bavarian_Forest.jpg/640px-Aerial_view_of_the_Bavarian_Forest.jpg',
        img1label: 'Aerial view — coniferous canopy',
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Pinus_sylvestris_-_Waldkiefer.jpg/640px-Pinus_sylvestris_-_Waldkiefer.jpg',
        img2label: 'Scots pine (Pinus sylvestris)',
    },
    {
        key: 'industrial',
        type: 'urban',
        title: '🏭 8. Industrial or commercial units',
        badge: 'Urban', badgeClass: 'badge-urban',
        shortDesc: 'Built-up areas dominated by buildings and infrastructure, with minimal natural vegetation.',
        desc: 'Built-up areas designed for industry, warehouses, or business operations. Vegetation is minimal, often limited to landscaped green spaces or roadside trees. These areas are dominated by man-made surfaces and natural habitats are largely absent.',
        species: ['Ornamental plants', 'Roadside trees'],
        img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Industrial_area_from_above.jpg/640px-Industrial_area_from_above.jpg',
        img1label: 'Aerial view — industrial zone',
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Industrial_plant.jpg/640px-Industrial_plant.jpg',
        img2label: 'Ground view — commercial units',
    },
    {
        key: 'inlandwater',
        type: 'water',
        title: '💧 9. Inland waters',
        badge: 'Water', badgeClass: 'badge-water',
        shortDesc: 'Freshwater bodies including lakes, rivers, and reservoirs dominated by aquatic ecosystems.',
        desc: 'Freshwater bodies such as lakes, rivers, reservoirs, and ponds. Aquatic plants include water lilies, reeds, and algae. These habitats are crucial for biodiversity, providing breeding and feeding grounds for birds, fish, and amphibians.',
        species: ['Nymphaea', 'Algae', 'Reeds', 'Riparian grasses'],
        img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Lagoon_from_above.jpg/640px-Lagoon_from_above.jpg',
        img1label: 'Aerial view — inland water body',
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nymphaea_alba_-_white_waterlily.jpg/640px-Nymphaea_alba_-_white_waterlily.jpg',
        img2label: 'White water lily (Nymphaea alba)',
    },
    {
        key: 'inlandwetland',
        type: 'water',
        title: '🌿 10. Inland wetlands',
        badge: 'Water', badgeClass: 'badge-water',
        shortDesc: 'Water-saturated land supporting dense, moisture-loving vegetation away from the coast.',
        desc: 'Freshwater-saturated lands away from the coast, including marshes, swamps, and peatlands. Vegetation is dominated by reeds, sedges, rushes, and water-loving herbs. These ecosystems support rich biodiversity and act as natural water filters and flood buffers.',
        species: ['Phragmites', 'Sedges', 'Rushes', 'Marsh herbs'],
        img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Marshland.jpg/640px-Marshland.jpg',
        img1label: 'Aerial view — inland marsh',
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Phragmites_australis_Keila.jpg/640px-Phragmites_australis_Keila.jpg',
        img2label: 'Common reed (Phragmites australis)',
    },
    {
        key: 'agrinatural',
        type: 'agriculture',
        title: '🌾 11. Agriculture with natural vegetation',
        badge: 'Agriculture', badgeClass: 'badge-agriculture',
        shortDesc: 'Agricultural land interspersed with patches of natural vegetation such as hedgerows and small forests.',
        desc: 'Agricultural land interspersed with patches of natural vegetation, such as hedgerows, small forests, or grasslands. This mosaic enhances biodiversity while still producing crops. Landscapes often appear semi-natural, with a mix of green fields and wooded patches.',
        species: ['Cereals', 'Oak', 'Olive', 'Hedgerow shrubs'],
        img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Farmland_from_above.jpg/640px-Farmland_from_above.jpg',
        img1label: 'Aerial view — mixed farmland',
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Hedgerow_in_Devon.jpg/640px-Hedgerow_in_Devon.jpg',
        img2label: 'Hedgerow vegetation',
    },
    {
        key: 'marine',
        type: 'water',
        title: '🌊 12. Marine waters',
        badge: 'Water', badgeClass: 'badge-water',
        shortDesc: 'Open sea areas, sometimes containing underwater seagrass meadows and algae.',
        desc: 'Open sea areas with minimal terrestrial vegetation. Submerged vegetation may include seagrass meadows (Posidonia oceanica in the Mediterranean) and algae. Marine waters play critical roles in climate regulation and as fishery habitats.',
        species: ['Posidonia oceanica', 'Algae', 'Seagrass'],
        img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Mediterranean_Sea_from_above.jpg/640px-Mediterranean_Sea_from_above.jpg',
        img1label: 'Aerial view — Mediterranean sea',
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Posidonia_oceanica_Malta.jpg/640px-Posidonia_oceanica_Malta.jpg',
        img2label: 'Posidonia oceanica seagrass',
    },
    {
        key: 'mixedforest',
        type: 'natural',
        title: '🌲🌳 13. Mixed forest',
        badge: 'Natural', badgeClass: 'badge-natural',
        shortDesc: 'Forests containing both broadleaf and coniferous trees, creating high structural and biological diversity.',
        desc: 'Forests containing both broadleaf and coniferous trees, creating high structural and biological diversity. The canopy has variable height and density, supporting a diverse understory of shrubs, ferns, and herbaceous plants.',
        species: ['Oak', 'Pine', 'Chestnut', 'Cypress'],
        img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Mixed_forest_from_above.jpg/640px-Mixed_forest_from_above.jpg',
        img1label: 'Aerial view — mixed canopy',
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Mixed_woodland.jpg/640px-Mixed_woodland.jpg',
        img2label: 'Ground view — mixed woodland',
    },
    {
        key: 'moors',
        type: 'natural',
        title: '🌿 14. Moors, heathland, sclerophyllous',
        badge: 'Natural', badgeClass: 'badge-natural',
        shortDesc: 'Low-growing Mediterranean shrublands adapted to dry, nutrient-poor conditions. Known locally as garigue.',
        desc: 'Low-growing, drought-tolerant shrublands typical of the Mediterranean. These areas often have poor, rocky soils and provide habitats for specialised wildlife. Known locally in Malta as garigue — they appear open with dense low shrubs interspersed with bare rock and ground.',
        species: ['Thymus', 'Rosmarinus', 'Juniper', 'Maquis shrubs'],
        img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Garigue_Malta.jpg/640px-Garigue_Malta.jpg',
        img1label: 'Aerial view — garigue Malta',
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Thymus_vulgaris_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-266.jpg/640px-Thymus_vulgaris_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-266.jpg',
        img2label: 'Thyme (Thymus vulgaris)',
    },
    {
        key: 'grassland',
        type: 'natural',
        title: '🌱 15. Natural grassland & sparse vegetation',
        badge: 'Natural', badgeClass: 'badge-natural',
        shortDesc: 'Areas dominated by grasses and herbs, often used for grazing or naturally occurring in open landscapes.',
        desc: 'Areas dominated by grasses, herbs, and occasional shrubs, often occurring in regions unsuitable for forests or agriculture. These lands support grazing wildlife and maintain soil structure. Visually they appear open and green with scattered vegetation.',
        species: ['Wild grasses', 'Clover', 'Herbaceous plants'],
        img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Grassland_aerial.jpg/640px-Grassland_aerial.jpg',
        img1label: 'Aerial view — natural grassland',
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Natural_meadow.jpg/640px-Natural_meadow.jpg',
        img2label: 'Ground view — wild meadow',
    },
    {
        key: 'pastures',
        type: 'agriculture',
        title: '🐄 16. Pastures',
        badge: 'Agriculture', badgeClass: 'badge-agriculture',
        shortDesc: 'Managed grasslands maintained for livestock grazing, enriched with clover and fodder grasses.',
        desc: 'Managed grasslands maintained for livestock grazing, often enriched with clover and fodder grasses. Pastures may include scattered trees or shrubs but are primarily grass-dominated. They provide fodder, prevent soil erosion, and maintain open landscapes.',
        species: ['Grazing grasses', 'Clover', 'Fodder plants'],
        img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pasture_aerial_view.jpg/640px-Pasture_aerial_view.jpg',
        img1label: 'Aerial view — managed pasture',
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Cows_in_a_grassy_field.jpg/640px-Cows_in_a_grassy_field.jpg',
        img2label: 'Livestock grazing',
    },
    {
        key: 'permcrops',
        type: 'agriculture',
        title: '🌴 17. Permanent crops',
        badge: 'Agriculture', badgeClass: 'badge-agriculture',
        shortDesc: 'Long-term plantations including vineyards, olive groves, and citrus orchards.',
        desc: 'Plantations of long-term crops that remain for several years, including vineyards, olive groves, and citrus orchards. These areas are structurally regular, regularly maintained, and support biodiversity through associated vegetation.',
        species: ['Vitis vinifera', 'Olea europaea', 'Citrus spp.'],
        img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Vineyard_aerial.jpg/640px-Vineyard_aerial.jpg',
        img1label: 'Aerial view — vineyard rows',
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Young-olive-trees.jpg/640px-Young-olive-trees.jpg',
        img2label: 'Olive grove (Olea europaea)',
    },
    {
        key: 'transitional',
        type: 'natural',
        title: '🌿 18. Transitional woodland & shrub',
        badge: 'Natural', badgeClass: 'badge-natural',
        shortDesc: 'Areas in ecological succession, transitioning from grassland or shrubland to forest.',
        desc: 'Areas in ecological succession, transitioning from grassland or shrubland to forest. Vegetation includes young trees, shrubs, and pioneer species. These areas are critical for natural landscape regeneration and provide habitat for insects, birds, and small mammals.',
        species: ['Young trees', 'Pioneer shrubs', 'Bushes'],
        img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Transitional_woodland_aerial.jpg/640px-Transitional_woodland_aerial.jpg',
        img1label: 'Aerial view — transitional scrubland',
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Young_trees_shrubs.jpg/640px-Young_trees_shrubs.jpg',
        img2label: 'Young woodland regrowth',
    },
    {
        key: 'urban',
        type: 'urban',
        title: '🏙️ 19. Urban fabric',
        badge: 'Urban', badgeClass: 'badge-urban',
        shortDesc: 'Cities and towns dominated by buildings, with vegetation limited to parks, gardens, and street trees.',
        desc: 'Built-up urban areas with high-density human structures, where natural vegetation is mostly limited to parks, gardens, and street trees. Visually dominated by buildings, roads, and impervious surfaces.',
        species: ['Park trees', 'Garden plants', 'Street trees'],
        img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Valletta_aerial.jpg/640px-Valletta_aerial.jpg',
        img1label: 'Aerial view — urban Valletta',
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Malta_urban_street.jpg/640px-Malta_urban_street.jpg',
        img2label: 'Urban street vegetation',
    },
];

// ─── Placeholder fallbacks per type ──────────────────────────────────────────
const fallbacks = {
    natural:     { sat: '1e2a3a/3fb950', gnd: '1e2a3a/3fb950' },
    agriculture: { sat: '1e2a3a/d29922', gnd: '1e2a3a/3fb950' },
    urban:       { sat: '1e2a3a/f85149', gnd: '1e2a3a/f85149' },
    water:       { sat: '1e2a3a/58a6ff', gnd: '1e2a3a/3fb950' },
};

function imgTag(src, alt, fallbackColour, extraAttrs) {
    return `<img src="${src}" alt="${alt}" ${extraAttrs || ''}
                 onerror="this.src='https://placehold.co/640x360/${fallbackColour}?text=${encodeURIComponent(alt)}'">`;
}

// ─── Build the full photo list for the lightbox ───────────────────────────────
// img1 + img2 are always first; photos[] adds extra slides after them.
function buildPhotoList(cat) {
    const fb = fallbacks[cat.type] || fallbacks.natural;
    const list = [
        { src: cat.img1, label: cat.img1label, fallback: fb.sat },
        { src: cat.img2, label: cat.img2label, fallback: fb.gnd },
    ];
    if (Array.isArray(cat.photos)) {
        cat.photos.forEach(p => list.push({ src: p.src, label: p.label, fallback: fb.gnd }));
    }
    return list;
}

// ─── Lightbox state ───────────────────────────────────────────────────────────
let _lightboxPhotos  = [];
let _lightboxIndex   = 0;
let _lightboxCatKey  = null;

function openLightbox(key, startIndex) {
    const cat = categoryData.find(c => c.key === key);
    if (!cat) return;

    _lightboxCatKey  = key;
    _lightboxPhotos  = buildPhotoList(cat);
    _lightboxIndex   = startIndex || 0;

    document.getElementById('lightboxTitle').textContent = cat.title;
    renderLightboxSlide();

    // Dismiss the card modal first, then show lightbox after transition ends
    const cardModalEl = document.getElementById('catModal');
    const cardModal   = bootstrap.Modal.getInstance(cardModalEl);

    if (cardModal) {
        cardModalEl.addEventListener('hidden.bs.modal', _showLightboxOnce, { once: true });
        cardModal.hide();
    } else {
        _showLightboxOnce();
    }
}

function _showLightboxOnce() {
    new bootstrap.Modal(document.getElementById('lightboxModal')).show();
}

function renderLightboxSlide() {
    const photo = _lightboxPhotos[_lightboxIndex];
    const total = _lightboxPhotos.length;
    const fb    = photo.fallback || '1e2a3a/adb5bd';

    const img = document.getElementById('lightboxImg');
    img.src   = photo.src;
    img.alt   = photo.label;
    img.onerror = function () {
        this.src = `https://placehold.co/900x500/${fb}?text=${encodeURIComponent(photo.label)}`;
        this.onerror = null;
    };

    document.getElementById('lightboxCaption').textContent = photo.label;
    document.getElementById('lightboxCounter').textContent = `${_lightboxIndex + 1} / ${total}`;

    document.getElementById('lightboxPrev').disabled = (_lightboxIndex === 0);
    document.getElementById('lightboxNext').disabled = (_lightboxIndex === total - 1);
}

function lightboxPrev() {
    if (_lightboxIndex > 0) { _lightboxIndex--; renderLightboxSlide(); }
}

function lightboxNext() {
    if (_lightboxIndex < _lightboxPhotos.length - 1) { _lightboxIndex++; renderLightboxSlide(); }
}

// Keyboard navigation while lightbox is open
document.addEventListener('keydown', e => {
    if (!document.getElementById('lightboxModal').classList.contains('show')) return;
    if (e.key === 'ArrowLeft')  lightboxPrev();
    if (e.key === 'ArrowRight') lightboxNext();
    if (e.key === 'Escape')     bootstrap.Modal.getInstance(document.getElementById('lightboxModal'))?.hide();
});

// Re-open the card modal when the lightbox closes
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('lightboxModal').addEventListener('hidden.bs.modal', () => {
        if (_lightboxCatKey) {
            // Small delay so Bootstrap finishes cleaning up
            setTimeout(() => openModal(_lightboxCatKey), 150);
        }
    });
});

// ─── Render all cards into #catGrid ──────────────────────────────────────────
function renderCards() {
    const grid = document.getElementById('catGrid');

    grid.innerHTML = categoryData.map(cat => {
        const fb = fallbacks[cat.type] || fallbacks.natural;
        return `
        <div class="col-md-6 col-lg-4 cat-item" data-type="${cat.type}">
          <div class="cat-card" onclick="openModal('${cat.key}')">
            <div class="cat-images">
              <div class="img-label" data-label="Satellite">
                ${imgTag(
                    typeof cat.img1 === 'object' ? cat.img1.src : cat.img1,
                    typeof cat.img1 === 'object' ? cat.img1.label : cat.img1label,
                    fb.sat
                )}
              </div>
              <div class="img-label" data-label="Ground">
                ${imgTag(
                    typeof cat.img2 === 'object' ? cat.img2.src : cat.img2,
                    typeof cat.img2 === 'object' ? cat.img2.label : cat.img2label,
                    fb.gnd
                )}
              </div>
            </div>
            <div class="cat-body">
              <span class="cat-badge ${cat.badgeClass}">${cat.badge}</span>
              <div class="cat-title">${cat.title}</div>
              <p class="cat-desc">${cat.shortDesc}</p>
              <div class="species-list">
                ${cat.species.map(s => `<span class="species-tag">${s}</span>`).join('')}
              </div>
            </div>
          </div>
        </div>`;
    }).join('');
}

// ─── Open card modal ──────────────────────────────────────────────────────────
function openModal(key) {
    const cat = categoryData.find(c => c.key === key);
    if (!cat) return;

    const fb         = fallbacks[cat.type] || fallbacks.natural;
    const photoList  = buildPhotoList(cat);
    const hasExtras  = Array.isArray(cat.photos) && cat.photos.length > 0;

    document.getElementById('modalTitle').textContent = cat.title;

    const badge = document.getElementById('modalBadge');
    badge.textContent = cat.badge;
    badge.className   = `cat-badge ${cat.badgeClass} mb-2 d-inline-block`;

    document.getElementById('modalDesc').textContent = cat.desc;

    document.getElementById('modalImages').innerHTML = `
    <div>
        ${imgTag(
            typeof cat.img1 === 'object' ? cat.img1.src : cat.img1,
            typeof cat.img1 === 'object' ? cat.img1.label : cat.img1label,
            fb.sat
        )}
    </div>
    <div>
        ${imgTag(
            typeof cat.img2 === 'object' ? cat.img2.src : cat.img2,
            typeof cat.img2 === 'object' ? cat.img2.label : cat.img2label,
            fb.gnd
        )}
    </div>`;

    document.getElementById('modalSpecies').innerHTML =
        cat.species.map(s => `<span class="species-tag">${s}</span>`).join('');

    // "View all photos" button — only shown when extra photos exist
    const photoBtn = document.getElementById('modalPhotoBtn');
    if (hasExtras) {
        photoBtn.style.display = '';
        photoBtn.textContent   = `🖼 View all photos (${photoList.length})`;
        photoBtn.onclick       = () => openLightbox(key, 0);
    } else {
        photoBtn.style.display = 'none';
    }

    new bootstrap.Modal(document.getElementById('catModal')).show();
}

// ─── Filter ───────────────────────────────────────────────────────────────────
function filterCats(type, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.cat-item').forEach(item => {
        item.style.display = (type === 'all' || item.dataset.type === type) ? '' : 'none';
    });
}

// ─── Boot ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', renderCards);