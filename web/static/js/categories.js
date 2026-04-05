const categoryData = {
    agroforestry: {
        title: '🌳 1. Agro-forestry areas',
        badge: 'Agriculture', badgeClass: 'badge-agriculture',
        desc: 'These are landscapes where trees, shrubs, and crops coexist with or complement each other, often integrated with livestock. Agro-forestry is a sustainable land-use system that enhances biodiversity, prevents soil erosion, and improves microclimates. Typical trees include olive, carob, almond, and citrus, while understory crops might be cereals or vegetables.',
        species: ['Olea europaea', 'Ceratonia siliqua', 'Almond', 'Citrus'],
        img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Dehesa_de_Extremadura.jpg/640px-Dehesa_de_Extremadura.jpg',
        img1label: 'Aerial view — agro-forestry landscape',
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Olive_trees_in_Kroatia.jpg/640px-Olive_trees_in_Kroatia.jpg',
        img2label: 'Olive trees (Olea europaea)',
    },
    arable: {
        title: '🌾 2. Arable land',
        badge: 'Agriculture', badgeClass: 'badge-agriculture',
        desc: 'Land actively used for seasonal crop cultivation, such as wheat, barley, maize, or vegetables. Arable land is usually intensively managed, with regular ploughing and harvesting. Natural vegetation is minimal, and soil fertility is maintained artificially. The visual landscape typically appears as uniform geometric fields.',
        species: ['Wheat', 'Barley', 'Maize', 'Potatoes', 'Tomatoes'],
        img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Wheat_close-up.JPG/640px-Wheat_close-up.JPG',
        img1label: 'Aerial view — arable fields',
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Wheat_harvest.jpg/640px-Wheat_harvest.jpg',
        img2label: 'Wheat crop (Triticum aestivum)',
    },
    beach: {
        title: '🏖️ 3. Beaches, dunes, sands',
        badge: 'Natural', badgeClass: 'badge-natural',
        desc: 'Sandy coastal environments dominated by stress-tolerant vegetation adapted to high winds, salt spray, and low nutrient soils. These areas act as natural buffers against coastal erosion and may support small scattered shrubs or grasses, giving a sparse and open appearance.',
        species: ['Ammophila arenaria', 'Pancratium maritimum'],
        img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Aerial_of_sand_dunes.jpg/640px-Aerial_of_sand_dunes.jpg',
        img1label: 'Aerial view — coastal dunes',
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Ammophila_arenaria_Dunkirk.jpg/640px-Ammophila_arenaria_Dunkirk.jpg',
        img2label: 'Marram grass (Ammophila arenaria)',
    },
    broadleaf: {
        title: '🌳 4. Broad-leaved forest',
        badge: 'Natural', badgeClass: 'badge-natural',
        desc: 'Forests dominated by deciduous or evergreen broadleaf trees, often forming dense canopies. They support high biodiversity including shrubs, ferns, and herbaceous understory. These forests typically have multi-layered vegetation with clear stratification between canopy, understory, and ground flora.',
        species: ['Quercus spp.', 'Eucalyptus', 'Chestnut', 'Plane trees'],
        img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/24701-nature-natural-beauty.jpg/640px-24701-nature-natural-beauty.jpg',
        img1label: 'Aerial view — broadleaf canopy',
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Quercus_robur_in_Eastnor_Park.jpg/640px-Quercus_robur_in_Eastnor_Park.jpg',
        img2label: 'English oak (Quercus robur)',
    },
    coastalwetland: {
        title: '🌊 5. Coastal wetlands',
        badge: 'Water', badgeClass: 'badge-water',
        desc: 'Low-lying areas near the coast where soil is saturated by seawater, creating salt marshes and brackish habitats. Vegetation is specialised, including reeds, saltmarsh grasses, and succulents. These ecosystems provide critical services such as flood protection, nutrient filtration, and wildlife habitat.',
        species: ['Salicornia', 'Phragmites', 'Saltmarsh grasses'],
        img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Sa_Dragonera_island_-_salt_flats.jpg/640px-Sa_Dragonera_island_-_salt_flats.jpg',
        img1label: 'Aerial view — coastal salt flats',
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Salicornia_europaea_1.jpg/640px-Salicornia_europaea_1.jpg',
        img2label: 'Glasswort (Salicornia europaea)',
    },
    complexcult: {
        title: '🌱 6. Complex cultivation patterns',
        badge: 'Agriculture', badgeClass: 'badge-agriculture',
        desc: 'Land with small, irregularly shaped plots of mixed crops, orchards, and fallow patches. This pattern promotes biodiversity by interspersing cultivated and natural areas. Visually, the landscape appears fragmented, reflecting intensive but traditional farming systems.',
        species: ['Mixed crops', 'Fruit trees', 'Cereals', 'Vegetables'],
        img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Terrace_farming.jpg/640px-Terrace_farming.jpg',
        img1label: 'Aerial view — complex field patterns',
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Farmers_who_work_in_their_fields.jpg/640px-Farmers_who_work_in_their_fields.jpg',
        img2label: 'Mixed cultivation ground view',
    },
    coniferous: {
        title: '🌲 7. Coniferous forest',
        badge: 'Natural', badgeClass: 'badge-natural',
        desc: 'Forests dominated by needle-leaf, cone-bearing trees such as pines, spruces, and cypresses. Understory vegetation is usually sparse, consisting of mosses, ferns, and low shrubs. The canopy tends to be uniform, giving a dense, dark-green appearance from above.',
        species: ['Pinus', 'Cupressus', 'Spruce', 'Fir'],
        img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Aerial_view_of_the_Bavarian_Forest.jpg/640px-Aerial_view_of_the_Bavarian_Forest.jpg',
        img1label: 'Aerial view — coniferous canopy',
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Pinus_sylvestris_-_Waldkiefer.jpg/640px-Pinus_sylvestris_-_Waldkiefer.jpg',
        img2label: 'Scots pine (Pinus sylvestris)',
    },
    industrial: {
        title: '🏭 8. Industrial or commercial units',
        badge: 'Urban', badgeClass: 'badge-urban',
        desc: 'Built-up areas designed for industry, warehouses, or business operations. Vegetation is minimal, often limited to landscaped green spaces or roadside trees. These areas are dominated by man-made surfaces and natural habitats are largely absent.',
        species: ['Ornamental plants', 'Roadside trees'],
        img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Industrial_area_from_above.jpg/640px-Industrial_area_from_above.jpg',
        img1label: 'Aerial view — industrial zone',
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Industrial_plant.jpg/640px-Industrial_plant.jpg',
        img2label: 'Ground view — commercial units',
    },
    inlandwater: {
        title: '💧 9. Inland waters',
        badge: 'Water', badgeClass: 'badge-water',
        desc: 'Freshwater bodies such as lakes, rivers, reservoirs, and ponds. Aquatic plants include water lilies, reeds, and algae. These habitats are crucial for biodiversity, providing breeding and feeding grounds for birds, fish, and amphibians.',
        species: ['Nymphaea', 'Algae', 'Reeds', 'Riparian grasses'],
        img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Lagoon_from_above.jpg/640px-Lagoon_from_above.jpg',
        img1label: 'Aerial view — inland water body',
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nymphaea_alba_-_white_waterlily.jpg/640px-Nymphaea_alba_-_white_waterlily.jpg',
        img2label: 'White water lily (Nymphaea alba)',
    },
    inlandwetland: {
        title: '🌿 10. Inland wetlands',
        badge: 'Water', badgeClass: 'badge-water',
        desc: 'Freshwater-saturated lands away from the coast, including marshes, swamps, and peatlands. Vegetation is dominated by reeds, sedges, rushes, and water-loving herbs. These ecosystems support rich biodiversity and act as natural water filters and flood buffers.',
        species: ['Phragmites', 'Sedges', 'Rushes', 'Marsh herbs'],
        img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Marshland.jpg/640px-Marshland.jpg',
        img1label: 'Aerial view — inland marsh',
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Phragmites_australis_Keila.jpg/640px-Phragmites_australis_Keila.jpg',
        img2label: 'Common reed (Phragmites australis)',
    },
    agrinatural: {
        title: '🌾 11. Agriculture with natural vegetation',
        badge: 'Agriculture', badgeClass: 'badge-agriculture',
        desc: 'Agricultural land interspersed with patches of natural vegetation, such as hedgerows, small forests, or grasslands. This mosaic enhances biodiversity while still producing crops. Landscapes often appear semi-natural, with a mix of green fields and wooded patches.',
        species: ['Cereals', 'Oak', 'Olive', 'Hedgerow shrubs'],
        img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Farmland_from_above.jpg/640px-Farmland_from_above.jpg',
        img1label: 'Aerial view — mixed farmland',
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Hedgerow_in_Devon.jpg/640px-Hedgerow_in_Devon.jpg',
        img2label: 'Hedgerow vegetation',
    },
    marine: {
        title: '🌊 12. Marine waters',
        badge: 'Water', badgeClass: 'badge-water',
        desc: 'Open sea areas with minimal terrestrial vegetation. Submerged vegetation may include seagrass meadows (Posidonia oceanica in the Mediterranean) and algae. Marine waters play critical roles in climate regulation and as fishery habitats.',
        species: ['Posidonia oceanica', 'Algae', 'Seagrass'],
        img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Mediterranean_Sea_from_above.jpg/640px-Mediterranean_Sea_from_above.jpg',
        img1label: 'Aerial view — Mediterranean sea',
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Posidonia_oceanica_Malta.jpg/640px-Posidonia_oceanica_Malta.jpg',
        img2label: 'Posidonia oceanica seagrass',
    },
    mixedforest: {
        title: '🌲🌳 13. Mixed forest',
        badge: 'Natural', badgeClass: 'badge-natural',
        desc: 'Forests containing both broadleaf and coniferous trees, creating high structural and biological diversity. The canopy has variable height and density, supporting a diverse understory of shrubs, ferns, and herbaceous plants.',
        species: ['Oak', 'Pine', 'Chestnut', 'Cypress'],
        img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Mixed_forest_from_above.jpg/640px-Mixed_forest_from_above.jpg',
        img1label: 'Aerial view — mixed canopy',
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Mixed_woodland.jpg/640px-Mixed_woodland.jpg',
        img2label: 'Ground view — mixed woodland',
    },
    moors: {
        title: '🌿 14. Moors, heathland, sclerophyllous',
        badge: 'Natural', badgeClass: 'badge-natural',
        desc: 'Low-growing, drought-tolerant shrublands typical of the Mediterranean. These areas often have poor, rocky soils and provide habitats for specialised wildlife. Known locally in Malta as garigue — they appear open with dense low shrubs interspersed with bare rock and ground.',
        species: ['Thymus', 'Rosmarinus', 'Juniper', 'Maquis shrubs'],
        img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Garigue_Malta.jpg/640px-Garigue_Malta.jpg',
        img1label: 'Aerial view — garigue Malta',
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Thymus_vulgaris_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-266.jpg/640px-Thymus_vulgaris_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-266.jpg',
        img2label: 'Thyme (Thymus vulgaris)',
    },
    grassland: {
        title: '🌱 15. Natural grassland & sparse vegetation',
        badge: 'Natural', badgeClass: 'badge-natural',
        desc: 'Areas dominated by grasses, herbs, and occasional shrubs, often occurring in regions unsuitable for forests or agriculture. These lands support grazing wildlife and maintain soil structure. Visually they appear open and green with scattered vegetation.',
        species: ['Wild grasses', 'Clover', 'Herbaceous plants'],
        img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Grassland_aerial.jpg/640px-Grassland_aerial.jpg',
        img1label: 'Aerial view — natural grassland',
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Natural_meadow.jpg/640px-Natural_meadow.jpg',
        img2label: 'Ground view — wild meadow',
    },
    pastures: {
        title: '🐄 16. Pastures',
        badge: 'Agriculture', badgeClass: 'badge-agriculture',
        desc: 'Managed grasslands maintained for livestock grazing, often enriched with clover and fodder grasses. Pastures may include scattered trees or shrubs but are primarily grass-dominated. They provide fodder, prevent soil erosion, and maintain open landscapes.',
        species: ['Grazing grasses', 'Clover', 'Fodder plants'],
        img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pasture_aerial_view.jpg/640px-Pasture_aerial_view.jpg',
        img1label: 'Aerial view — managed pasture',
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Cows_in_a_grassy_field.jpg/640px-Cows_in_a_grassy_field.jpg',
        img2label: 'Livestock grazing',
    },
    permcrops: {
        title: '🌴 17. Permanent crops',
        badge: 'Agriculture', badgeClass: 'badge-agriculture',
        desc: 'Plantations of long-term crops that remain for several years, including vineyards, olive groves, and citrus orchards. These areas are structurally regular, regularly maintained, and support biodiversity through associated vegetation.',
        species: ['Vitis vinifera', 'Olea europaea', 'Citrus spp.'],
        img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Vineyard_aerial.jpg/640px-Vineyard_aerial.jpg',
        img1label: 'Aerial view — vineyard rows',
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Young-olive-trees.jpg/640px-Young-olive-trees.jpg',
        img2label: 'Olive grove (Olea europaea)',
    },
    transitional: {
        title: '🌿 18. Transitional woodland & shrub',
        badge: 'Natural', badgeClass: 'badge-natural',
        desc: 'Areas in ecological succession, transitioning from grassland or shrubland to forest. Vegetation includes young trees, shrubs, and pioneer species. These areas are critical for natural landscape regeneration and provide habitat for insects, birds, and small mammals.',
        species: ['Young trees', 'Pioneer shrubs', 'Bushes'],
        img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Transitional_woodland_aerial.jpg/640px-Transitional_woodland_aerial.jpg',
        img1label: 'Aerial view — transitional scrubland',
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Young_trees_shrubs.jpg/640px-Young_trees_shrubs.jpg',
        img2label: 'Young woodland regrowth',
    },
    urban: {
        title: '🏙️ 19. Urban fabric',
        badge: 'Urban', badgeClass: 'badge-urban',
        desc: 'Built-up urban areas with high-density human structures, where natural vegetation is mostly limited to parks, gardens, and street trees. Visually dominated by buildings, roads, and impervious surfaces.',
        species: ['Park trees', 'Garden plants', 'Street trees'],
        img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Valletta_aerial.jpg/640px-Valletta_aerial.jpg',
        img1label: 'Aerial view — urban Valletta',
        img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Malta_urban_street.jpg/640px-Malta_urban_street.jpg',
        img2label: 'Urban street vegetation',
    },
};

function openModal(key) {
    const d = categoryData[key];
    if (!d) return;

    document.getElementById('modalTitle').textContent = d.title;

    const badge = document.getElementById('modalBadge');
    badge.textContent = d.badge;
    badge.className = `cat-badge ${d.badgeClass} mb-2 d-inline-block`;

    document.getElementById('modalDesc').textContent = d.desc;

    document.getElementById('modalImages').innerHTML = `
        <div>
            <img src="${d.img1}"
                 alt="${d.img1label}"
                 onerror="this.src='https://placehold.co/400x160/1e2a3a/58a6ff?text=Satellite+View'">
            <div class="modal-img-label">${d.img1label}</div>
        </div>
        <div>
            <img src="${d.img2}"
                 alt="${d.img2label}"
                 onerror="this.src='https://placehold.co/400x160/1e2a3a/3fb950?text=Ground+View'">
            <div class="modal-img-label">${d.img2label}</div>
        </div>
    `;

    document.getElementById('modalSpecies').innerHTML =
        d.species.map(s => `<span class="species-tag">${s}</span>`).join('');

    new bootstrap.Modal(document.getElementById('catModal')).show();
}

function filterCats(type, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('.cat-item').forEach(item => {
        const show = type === 'all' || item.dataset.type === type;
        item.style.display = show ? '' : 'none';
    });
}