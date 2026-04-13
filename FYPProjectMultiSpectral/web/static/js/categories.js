// ─── Folder name map: categoryData key → static/images subfolder ─────────────
const folderMap = {
    agroforestry:   'Agro-Forestry',
    arable:         'Arable-Land',
    beach:          'Beaches-Dunes-Sands',
    broadleaf:      'Broad-Leaved-Forest',
    coastalwetland: 'Coastal-Wetlands',
    complexcult:    'Complex-Cultivation-Patterns',
    coniferous:     'Coniferous-Forest',
    industrial:     'Industrial-Commercial-Units',
    inlandwater:    'Inland-Waters',
    inlandwetland:  'Inland-Wetlands',
    agrinatural:    'Land-Occupied-By-Agriculture-With-Vegetation',
    marine:         'Marine-Waters',
    mixedforest:    'Mixed-Forest',
    moors:          'Moors-Heathland-Vegetation',
    grassland:      'Natural-Grassland-Sparsely-Vegetated',
    pastures:       'Pastures',
    permcrops:      'Pernament-Crops',
    transitional:   'Transitional-Woodland-Shrub',
    urban:          'Urban-Fabric',
};

// ─── Fetch image manifest and patch categoryData, then render ─────────────────
async function loadImagesAndRender() {
    try {
        const res      = await fetch('/api/category-images');
        const manifest = await res.json();

        categoryData.forEach(cat => {
            const folderName = folderMap[cat.key];
            const data = folderName && manifest[folderName];
            if (!data) return;

            if (data.img1)   cat.img1   = data.img1;
            if (data.img2)   cat.img2   = data.img2;
            if (data.photos) cat.photos = data.photos;
        });
    } catch (e) {
        console.warn('Could not load image manifest, falling back to hardcoded paths.', e);
    }

    renderCards();
}

// ─── Category definitions (no image paths — injected at runtime) ──────────────
const categoryData = [
    {
        key: 'agroforestry',
        type: 'agriculture',
        title: '🌳 1. Agro-forestry areas',
        badge: 'Agriculture', badgeClass: 'badge-agriculture',
        shortDesc: 'Landscapes where trees and crops coexist, creating a semi-natural ecosystem with both agricultural and woody vegetation.',
        desc: 'These are landscapes where trees, shrubs, and crops coexist with or complement each other, often integrated with livestock. Agro-forestry is a sustainable land-use system that enhances biodiversity, prevents soil erosion, and improves microclimates. Typical trees include olive, carob, almond, and citrus, while understory crops might be cereals or vegetables.',
        species: ['Olea europaea', 'Ceratonia siliqua', 'Almond', 'Citrus'],
    },
    {
        key: 'arable',
        type: 'agriculture',
        title: '🌾 2. Arable land',
        badge: 'Agriculture', badgeClass: 'badge-agriculture',
        shortDesc: 'Land used for seasonal crop production, regularly ploughed and replanted, with little permanent vegetation.',
        desc: 'Land actively used for seasonal crop cultivation, such as wheat, barley, maize, or vegetables. Arable land is usually intensively managed, with regular ploughing and harvesting. Natural vegetation is minimal, and soil fertility is maintained artificially. The visual landscape typically appears as uniform geometric fields.',
        species: ['Wheat', 'Barley', 'Maize', 'Potatoes', 'Tomatoes'],
    },
    {
        key: 'beach',
        type: 'natural',
        title: '🏖️ 3. Beaches, dunes, sands',
        badge: 'Natural', badgeClass: 'badge-natural',
        shortDesc: 'Sandy environments with sparse, stress-tolerant vegetation adapted to salt, wind, and drought.',
        desc: 'Sandy coastal environments dominated by stress-tolerant vegetation adapted to high winds, salt spray, and low nutrient soils. These areas act as natural buffers against coastal erosion and may support small scattered shrubs or grasses, giving a sparse and open appearance.',
        species: ['Ammophila arenaria', 'Pancratium maritimum'],
    },
    {
        key: 'broadleaf',
        type: 'natural',
        title: '🌳 4. Broad-leaved forest',
        badge: 'Natural', badgeClass: 'badge-natural',
        shortDesc: 'Forests dominated by wide-leaf trees forming dense canopies and supporting rich biodiversity.',
        desc: 'Forests dominated by deciduous or evergreen broadleaf trees, often forming dense canopies. They support high biodiversity including shrubs, ferns, and herbaceous understory. These forests typically have multi-layered vegetation with clear stratification between canopy, understory, and ground flora.',
        species: ['Quercus spp.', 'Eucalyptus', 'Chestnut', 'Plane trees'],
    },
    {
        key: 'coastalwetland',
        type: 'water',
        title: '🌊 5. Coastal wetlands',
        badge: 'Water', badgeClass: 'badge-water',
        shortDesc: 'Wetlands near the coast influenced by saltwater, supporting vegetation adapted to saline conditions.',
        desc: 'Low-lying areas near the coast where soil is saturated by seawater, creating salt marshes and brackish habitats. Vegetation is specialised, including reeds, saltmarsh grasses, and succulents. These ecosystems provide critical services such as flood protection, nutrient filtration, and wildlife habitat.',
        species: ['Salicornia', 'Phragmites', 'Saltmarsh grasses'],
    },
    {
        key: 'complexcult',
        type: 'agriculture',
        title: '🌱 6. Complex cultivation patterns',
        badge: 'Agriculture', badgeClass: 'badge-agriculture',
        shortDesc: 'Highly fragmented agricultural landscapes with a mix of fields, trees, and natural patches.',
        desc: 'Land with small, irregularly shaped plots of mixed crops, orchards, and fallow patches. This pattern promotes biodiversity by interspersing cultivated and natural areas. Visually, the landscape appears fragmented, reflecting intensive but traditional farming systems.',
        species: ['Mixed crops', 'Fruit trees', 'Cereals', 'Vegetables'],
    },
    {
        key: 'coniferous',
        type: 'natural',
        title: '🌲 7. Coniferous forest',
        badge: 'Natural', badgeClass: 'badge-natural',
        shortDesc: 'Forests dominated by needle-leaf trees, typically evergreen and adapted to poorer soils.',
        desc: 'Forests dominated by needle-leaf, cone-bearing trees such as pines, spruces, and cypresses. Understory vegetation is usually sparse, consisting of mosses, ferns, and low shrubs. The canopy tends to be uniform, giving a dense, dark-green appearance from above.',
        species: ['Pinus', 'Cupressus', 'Spruce', 'Fir'],
    },
    {
        key: 'industrial',
        type: 'urban',
        title: '🏭 8. Industrial or commercial units',
        badge: 'Urban', badgeClass: 'badge-urban',
        shortDesc: 'Built-up areas dominated by buildings and infrastructure, with minimal natural vegetation.',
        desc: 'Built-up areas designed for industry, warehouses, or business operations. Vegetation is minimal, often limited to landscaped green spaces or roadside trees. These areas are dominated by man-made surfaces and natural habitats are largely absent.',
        species: ['Ornamental plants', 'Roadside trees'],
    },
    {
        key: 'inlandwater',
        type: 'water',
        title: '💧 9. Inland waters',
        badge: 'Water', badgeClass: 'badge-water',
        shortDesc: 'Freshwater bodies including lakes, rivers, and reservoirs dominated by aquatic ecosystems.',
        desc: 'Freshwater bodies such as lakes, rivers, reservoirs, and ponds. Aquatic plants include water lilies, reeds, and algae. These habitats are crucial for biodiversity, providing breeding and feeding grounds for birds, fish, and amphibians.',
        species: ['Nymphaea', 'Algae', 'Reeds', 'Riparian grasses'],
    },
    {
        key: 'inlandwetland',
        type: 'water',
        title: '🌿 10. Inland wetlands',
        badge: 'Water', badgeClass: 'badge-water',
        shortDesc: 'Water-saturated land supporting dense, moisture-loving vegetation away from the coast.',
        desc: 'Freshwater-saturated lands away from the coast, including marshes, swamps, and peatlands. Vegetation is dominated by reeds, sedges, rushes, and water-loving herbs. These ecosystems support rich biodiversity and act as natural water filters and flood buffers.',
        species: ['Phragmites', 'Sedges', 'Rushes', 'Marsh herbs'],
    },
    {
        key: 'agrinatural',
        type: 'agriculture',
        title: '🌾 11. Agriculture with natural vegetation',
        badge: 'Agriculture', badgeClass: 'badge-agriculture',
        shortDesc: 'Agricultural land interspersed with patches of natural vegetation such as hedgerows and small forests.',
        desc: 'Agricultural land interspersed with patches of natural vegetation, such as hedgerows, small forests, or grasslands. This mosaic enhances biodiversity while still producing crops. Landscapes often appear semi-natural, with a mix of green fields and wooded patches.',
        species: ['Cereals', 'Oak', 'Olive', 'Hedgerow shrubs'],
    },
    {
        key: 'marine',
        type: 'water',
        title: '🌊 12. Marine waters',
        badge: 'Water', badgeClass: 'badge-water',
        shortDesc: 'Open sea areas, sometimes containing underwater seagrass meadows and algae.',
        desc: 'Open sea areas with minimal terrestrial vegetation. Submerged vegetation may include seagrass meadows (Posidonia oceanica in the Mediterranean) and algae. Marine waters play critical roles in climate regulation and as fishery habitats.',
        species: ['Posidonia oceanica', 'Algae', 'Seagrass'],
    },
    {
        key: 'mixedforest',
        type: 'natural',
        title: '🌲🌳 13. Mixed forest',
        badge: 'Natural', badgeClass: 'badge-natural',
        shortDesc: 'Forests containing both broadleaf and coniferous trees, creating high structural and biological diversity.',
        desc: 'Forests containing both broadleaf and coniferous trees, creating high structural and biological diversity. The canopy has variable height and density, supporting a diverse understory of shrubs, ferns, and herbaceous plants.',
        species: ['Oak', 'Pine', 'Chestnut', 'Cypress'],
    },
    {
        key: 'moors',
        type: 'natural',
        title: '🌿 14. Moors, heathland, sclerophyllous',
        badge: 'Natural', badgeClass: 'badge-natural',
        shortDesc: 'Low-growing Mediterranean shrublands adapted to dry, nutrient-poor conditions. Known locally as garigue.',
        desc: 'Low-growing, drought-tolerant shrublands typical of the Mediterranean. These areas often have poor, rocky soils and provide habitats for specialised wildlife. Known locally in Malta as garigue — they appear open with dense low shrubs interspersed with bare rock and ground.',
        species: ['Thymus', 'Rosmarinus', 'Juniper', 'Maquis shrubs'],
    },
    {
        key: 'grassland',
        type: 'natural',
        title: '🌱 15. Natural grassland & sparse vegetation',
        badge: 'Natural', badgeClass: 'badge-natural',
        shortDesc: 'Areas dominated by grasses and herbs, often used for grazing or naturally occurring in open landscapes.',
        desc: 'Areas dominated by grasses, herbs, and occasional shrubs, often occurring in regions unsuitable for forests or agriculture. These lands support grazing wildlife and maintain soil structure. Visually they appear open and green with scattered vegetation.',
        species: ['Wild grasses', 'Clover', 'Herbaceous plants'],
    },
    {
        key: 'pastures',
        type: 'agriculture',
        title: '🐄 16. Pastures',
        badge: 'Agriculture', badgeClass: 'badge-agriculture',
        shortDesc: 'Managed grasslands maintained for livestock grazing, enriched with clover and fodder grasses.',
        desc: 'Managed grasslands maintained for livestock grazing, often enriched with clover and fodder grasses. Pastures may include scattered trees or shrubs but are primarily grass-dominated. They provide fodder, prevent soil erosion, and maintain open landscapes.',
        species: ['Grazing grasses', 'Clover', 'Fodder plants'],
    },
    {
        key: 'permcrops',
        type: 'agriculture',
        title: '🌴 17. Permanent crops',
        badge: 'Agriculture', badgeClass: 'badge-agriculture',
        shortDesc: 'Long-term plantations including vineyards, olive groves, and citrus orchards.',
        desc: 'Plantations of long-term crops that remain for several years, including vineyards, olive groves, and citrus orchards. These areas are structurally regular, regularly maintained, and support biodiversity through associated vegetation.',
        species: ['Vitis vinifera', 'Olea europaea', 'Citrus spp.'],
    },
    {
        key: 'transitional',
        type: 'natural',
        title: '🌿 18. Transitional woodland & shrub',
        badge: 'Natural', badgeClass: 'badge-natural',
        shortDesc: 'Areas in ecological succession, transitioning from grassland or shrubland to forest.',
        desc: 'Areas in ecological succession, transitioning from grassland or shrubland to forest. Vegetation includes young trees, shrubs, and pioneer species. These areas are critical for natural landscape regeneration and provide habitat for insects, birds, and small mammals.',
        species: ['Young trees', 'Pioneer shrubs', 'Bushes'],
    },
    {
        key: 'urban',
        type: 'urban',
        title: '🏙️ 19. Urban fabric',
        badge: 'Urban', badgeClass: 'badge-urban',
        shortDesc: 'Cities and towns dominated by buildings, with vegetation limited to parks, gardens, and street trees.',
        desc: 'Built-up urban areas with high-density human structures, where natural vegetation is mostly limited to parks, gardens, and street trees. Visually dominated by buildings, roads, and impervious surfaces.',
        species: ['Park trees', 'Garden plants', 'Street trees'],
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

function normaliseImg(imgField, labelFallback) {
    if (imgField && typeof imgField === 'object') {
        return { src: imgField.src, label: imgField.label || labelFallback || '' };
    }
    return { src: imgField || '', label: labelFallback || '' };
}

// ─── Build the full photo list for the lightbox ───────────────────────────────
function buildPhotoList(cat) {
    const fb  = fallbacks[cat.type] || fallbacks.natural;
    const i1  = normaliseImg(cat.img1, cat.img1label);
    const i2  = normaliseImg(cat.img2, cat.img2label);
    const list = [
        { src: i1.src, label: i1.label, fallback: fb.sat },
        { src: i2.src, label: i2.label, fallback: fb.gnd },
    ];
    if (Array.isArray(cat.photos)) {
        cat.photos.forEach(p => list.push({ src: p.src, label: p.label, fallback: fb.gnd }));
    }
    return list;
}

// ─── Lightbox state ───────────────────────────────────────────────────────────
let _lightboxPhotos = [];
let _lightboxIndex  = 0;
let _lightboxCatKey = null;

function openLightbox(key, startIndex) {
    const cat = categoryData.find(c => c.key === key);
    if (!cat) return;

    _lightboxCatKey  = key;
    _lightboxPhotos  = buildPhotoList(cat);
    _lightboxIndex   = startIndex || 0;

    document.getElementById('lightboxTitle').textContent = cat.title;
    renderLightboxSlide();

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

// ─── Keyboard navigation ──────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
    if (!document.getElementById('lightboxModal').classList.contains('show')) return;
    if (e.key === 'ArrowLeft')  lightboxPrev();
    if (e.key === 'ArrowRight') lightboxNext();
    if (e.key === 'Escape')     bootstrap.Modal.getInstance(document.getElementById('lightboxModal'))?.hide();
});

// ─── Re-open card modal when lightbox closes ──────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('lightboxModal').addEventListener('hidden.bs.modal', () => {
        if (_lightboxCatKey) {
            setTimeout(() => openModal(_lightboxCatKey), 150);
        }
    });
});

// ─── Render all cards into #catGrid ──────────────────────────────────────────
function renderCards() {
    const grid = document.getElementById('catGrid');

    grid.innerHTML = categoryData.map(cat => {
        const fb = fallbacks[cat.type] || fallbacks.natural;
        const i1 = normaliseImg(cat.img1, cat.img1label);
        const i2 = normaliseImg(cat.img2, cat.img2label);
        return `
        <div class="col-md-6 col-lg-4 cat-item" data-type="${cat.type}">
          <div class="cat-card" onclick="openModal('${cat.key}')">
            <div class="cat-images">
              <div class="img-label" data-label="Satellite">
                ${imgTag(i1.src, i1.label, fb.sat)}
              </div>
              <div class="img-label" data-label="Ground">
                ${imgTag(i2.src, i2.label, fb.gnd)}
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

    const fb        = fallbacks[cat.type] || fallbacks.natural;
    const i1        = normaliseImg(cat.img1, cat.img1label);
    const i2        = normaliseImg(cat.img2, cat.img2label);
    const photoList = buildPhotoList(cat);
    const hasExtras = Array.isArray(cat.photos) && cat.photos.length > 0;

    document.getElementById('modalTitle').textContent = cat.title;

    const badge = document.getElementById('modalBadge');
    badge.textContent = cat.badge;
    badge.className   = `cat-badge ${cat.badgeClass} mb-2 d-inline-block`;

    document.getElementById('modalDesc').textContent = cat.desc;

    document.getElementById('modalImages').innerHTML = `
        <div>
            ${imgTag(i1.src, i1.label, fb.sat)}
            <div class="modal-img-label">${i1.label}</div>
        </div>
        <div>
            ${imgTag(i2.src, i2.label, fb.gnd)}
            <div class="modal-img-label">${i2.label}</div>
        </div>`;

    document.getElementById('modalSpecies').innerHTML =
        cat.species.map(s => `<span class="species-tag">${s}</span>`).join('');

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
document.addEventListener('DOMContentLoaded', loadImagesAndRender);