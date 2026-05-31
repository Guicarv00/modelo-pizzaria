/* ========================================================== */
/* MOTOR INTERATIVO JAVASCRIPT PURO da PIZZARIA ELITE          */
/* Totalmente compatível com qualquer servidor (como Hostinger)*/
/* Sem compiladores, sem Node.js - Rápido, Leve e Moderno     */
/* ========================================================== */

// -------------------------------------------------------------
// 1. CONFIGURAÇÕES PRINCIPAIS - ALTERE AQUI SEUS DADOS GERAIS
// -------------------------------------------------------------
const CONFIG = {
    whatsappNumber: "5511999999999",
    companyName: "Pizzaria Elite",
    timezone: "Jardins, São Paulo"
};

// -------------------------------------------------------------
// 2. BANCO DE DADOS DO CARDÁPIO
// -------------------------------------------------------------
const MENU_ITEMS = [
    {
        id: 'margherita-suprema',
        name: 'Margherita Suprema',
        description: 'Molho de tomates San Marzano DOP, fior di latte fresco importado, folhas de manjericão orgânico colhidas no dia e generoso fio de azeite extra virgem siciliano.',
        basePrice: 59,
        category: 'tradicionais',
        image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=800',
        featured: true,
        tags: ['Mais Pedida', 'Clássica']
    },
    {
        id: 'calabresa-elite',
        name: 'Calabresa Defumada',
        description: 'Molho artesanal de tomate rústico, calabresa artesanal de cura lenta defumada em cerejeira, cebola roxa marinada no aceto, azeitonas pretas Azapa e orégano fresco.',
        basePrice: 63,
        category: 'tradicionais',
        image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80&w=800',
        tags: ['Tradicional']
    },
    {
        id: 'quatro-queijos-real',
        name: 'Quatro Queijos Real',
        description: 'Mozzarella di bufala artesanal, provolone defumado em lenha frutífera, Catupiry original certificado e raspas generosas de Grana Padano maturado por 12 meses.',
        basePrice: 69,
        category: 'tradicionais',
        image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&q=80&w=800',
        tags: ['Intensa']
    },
    {
        id: 'napolitana-classica',
        name: 'Napolitana Clássica',
        description: 'Receita original de Nápoles: molho San Marzano, anchovas do Mediterrâneo em azeite, alcaparras de Pantelleria, azeitonas pretas e orégano siciliano.',
        basePrice: 65,
        category: 'tradicionais',
        image: './napolitana.jpg',
        tags: ['Autêntica']
    },
    {
        id: 'trufas-cogumelos',
        name: 'Trufas Negras & Cogumelos',
        description: 'Creme de trufas brancas e negras do Piemonte, mix de cogumelos silvestres frescos salteados no vinho branco Soave, fior di latte e brotos aromáticos de tomilho limão.',
        basePrice: 89,
        category: 'especiais',
        image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&q=80&w=800',
        featured: true,
        tags: ['Assinatura', 'Trufas']
    },
    {
        id: 'parma-rucula',
        name: 'Parma & Rúcula Selvagem',
        description: 'Base de fior di latte, fatias ultrafinas de presunto cru tipo Parma 24 meses, rúcula selvagem fresca, lâminas de Parmigiano Reggiano e redução artesanal de balsâmico modenês.',
        basePrice: 84,
        category: 'especiais',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
        tags: ['Exclusiva']
    },
    {
        id: 'burrata-pesto',
        name: 'Burrata ao Pesto',
        description: 'Coroada por uma burrata italiana cremosa inteira, pesto rústico de manjericão genovês e pinoli tostados, tomates cereja confitados lentamente no azeite e flocos de sal Maldon.',
        basePrice: 86,
        category: 'especiais',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
        tags: ['Chef\'s Choice']
    },
    {
        id: 'salmon-cream',
        name: 'Salmão & Cream Cheese',
        description: 'Base de cream cheese artesanal, lâminas de salmão norueguês defumado a frio, alcaparras, cebola roxa em pétalas, dill fresco e raspas de limão siciliano.',
        basePrice: 92,
        category: 'especiais',
        image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&q=80&w=800',
        tags: ['Premium']
    },
    {
        id: 'chocolate-frutas-vermelhas',
        name: 'Chocolate Belga & Frutas',
        description: 'Massa fina crocante, chocolate Callebaut meio amargo 70% derretido, morangos orgânicos frescos fatiados, mirtilos e coulis rústico de framboesas com açúcar de cana.',
        basePrice: 65,
        category: 'doces',
        image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&q=80&w=800',
        featured: true,
        tags: ['Sobremesa', 'Premium']
    },
    {
        id: 'banoffee-elite',
        name: 'Banoffee Elite',
        description: 'Fundo de autêntico dulce de leche argentino La Lechera, bananas nanicas caramelizadas na manteiga francesa, chantilly perfumado com cumaru e canela do Ceilão.',
        basePrice: 59,
        category: 'doces',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
        tags: ['Sobremesa']
    },
    {
        id: 'nutella-morango',
        name: 'Nutella & Morango',
        description: 'Camada generosa de Nutella original italiana, morangos frescos laminados, farofa crocante de avelãs tostadas e fio de mel silvestre português.',
        basePrice: 55,
        category: 'doces',
        image: 'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&q=80&w=800',
        tags: ['Favorita']
    },
    {
        id: 'vinho-chianti',
        name: 'Vinho Tinto Chianti DOCG',
        description: 'Toscana encorpada de uvas Sangiovese com notas de cereja, tabaco e especiarias. Harmoniza perfeitamente com nossas pizzas de molho vermelho e queijos intensos.',
        basePrice: 139,
        category: 'bebidas',
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800',
        tags: ['Harmonização']
    },
    {
        id: 'cerveja-artesanal',
        name: 'Cerveja Artesanal IPA',
        description: 'IPA brasileira premiada com lúpulos Citra e Mosaic, notas cítricas tropicais e amargor elegante. Garrafa 500ml, servida gelada com copo exclusivo.',
        basePrice: 32,
        category: 'bebidas',
        image: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?auto=format&fit=crop&q=80&w=800',
        tags: ['Artesanal']
    },
    {
        id: 'san-pellegrino',
        name: 'Água San Pellegrino 750ml',
        description: 'Clássica água mineral gaseificada importada diretamente das fontes termais de San Pellegrino Terme, nos Alpes italianos. Levemente mineralizada e refrescante.',
        basePrice: 24,
        category: 'bebidas',
        image: 'https://images.unsplash.com/photo-1608885898957-a599fb16ecec?auto=format&fit=crop&q=80&w=800',
        tags: ['Importada']
    },
    {
        id: 'limonada-siciliana',
        name: 'Soda Siciliana Artesanal',
        description: 'Limão siciliano orgânico espremido na hora, água gaseificada premium, ramos de hortelã fresca e néctar de agave selvagem. Refrescante e sofisticada.',
        basePrice: 18,
        category: 'bebidas',
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800',
        tags: ['Refrescante']
    }
];

// -------------------------------------------------------------
// 3. DEPOIMENTOS - CORRIGIDOS E AMPLIADOS
// -------------------------------------------------------------
const INITIAL_TESTIMONIALS = [
    {
        id: 'review-1',
        name: 'Fernanda Castilho',
        role: 'Crítica Gastronômica — Folha de SP',
        text: 'A massa de fermentação lenta é um divisor de águas. Leve, aerada, com aquela crocância nas bordas que só se consegue com tempo e técnica. Os ingredientes italianos fazem toda a diferença — sente-se a qualidade em cada mordida. Uma das melhores pizzas que já experimentei em São Paulo.',
        rating: 5,
        avatarInitials: 'FC'
    },
    {
        id: 'review-2',
        name: 'Bruno Takahashi',
        role: 'Sommelier & Consultor de Vinhos',
        text: 'Harmonizei o Chianti DOCG com a pizza de Trufas Negras e foi uma experiência memorável. A entrega chegou em tempo recorde e, mais impressionante, a pizza estava exatamente como saiu do forno — borda crocante, queijo ainda no ponto. A embalagem térmica deles é realmente superior.',
        rating: 5,
        avatarInitials: 'BT'
    },
    {
        id: 'review-3',
        name: 'Camila Novaes',
        role: 'Chef de Cozinha — Restaurante Alma',
        text: 'Como cozinheira profissional, sou extremamente exigente. A Burrata ao Pesto me surpreendeu: a burrata chegou cremosa, o pesto com sabor fresco de manjericão genuíno e os tomates confitados perfeitamente equilibrados. Peço toda semana sem exagero.',
        rating: 5,
        avatarInitials: 'CN'
    },
    {
        id: 'review-4',
        name: 'Rafael Drummond',
        role: 'Empresário & Apreciador de Gastronomia',
        text: 'O atendimento pelo WhatsApp é o melhor que já vi num delivery. Personalizei meu pedido com detalhes específicos — sem cebola, borda de gorgonzola — e chegou exatamente como pedi, com uma mensagem confirmando cada detalhe. Isso é serviço de primeira.',
        rating: 5,
        avatarInitials: 'RD'
    },
    {
        id: 'review-5',
        name: 'Isabela Monteiro',
        role: 'Arquiteta & Moradora dos Jardins',
        text: 'Já tentei todas as pizzarias premium da região e a Elite está em outro nível. O preço é justo considerando a qualidade real dos ingredientes — nada de mozzarella industrializada ou molho de caixinha. Você paga mais e sente exatamente por quê.',
        rating: 5,
        avatarInitials: 'IM'
    },
    {
        id: 'review-6',
        name: 'Marcelo e Ana Figueira',
        role: 'Clientes desde a inauguração',
        text: 'Viramos tradição familiar: toda sexta-feira pedimos da Elite. As crianças amam a Margherita Suprema e nós sempre variamos entre as especiais. É o único delivery que todo mundo na família concorda sem discussão. Qualidade consistente em todos os pedidos.',
        rating: 5,
        avatarInitials: 'MF'
    }
];

// Estado geral do carrinho
let cart = [];

// Estado do modal
let currentSelectedItem = null;
let modalOptions = {
    size: 'grande',
    crust: 'tradicional',
    quantity: 1,
    notes: ''
};

// Aba ativa do cardápio
let currentCategory = 'tradicionais';

// Avaliação selecionada no formulário
let formSelectedRating = 5;

// Passo do Drawer
let currentDrawerStep = 'cart';

// Classes reutilizáveis para botões ativos/inativos
const BTN_ACTIVE = "p-3 rounded-xl border text-left transition flex justify-between items-center border-accent bg-accent/10 text-white font-semibold";
const BTN_INACTIVE = "p-3 rounded-xl border text-left transition flex justify-between items-center border-white/5 bg-white/5 text-muted hover:border-white/20";
const BTN_CRUST_ACTIVE = "w-full p-3 rounded-xl border text-left transition flex justify-between items-center border-accent bg-accent/10 text-white font-semibold";
const BTN_CRUST_INACTIVE = "w-full p-3 rounded-xl border text-left transition flex justify-between items-center border-white/5 bg-white/5 text-muted hover:border-white/10";

// -------------------------------------------------------------
// 4. INICIALIZAÇÃO
// -------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    renderMenu();
    renderTestimonials();
    lucide.createIcons();
    setupScrollEffects();
    initGsapAnimations();
});

// -------------------------------------------------------------
// 5. CARDÁPIO
// -------------------------------------------------------------
function renderMenu() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;

    const filtered = MENU_ITEMS.filter(item => item.category === currentCategory);

    productsGrid.innerHTML = filtered.map(item => {
        const tagsHtml = item.tags ? item.tags.map(tag => `
            <span class="bg-accent/90 text-black px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider shadow-sm mr-1">${escapeHtml(tag)}</span>
        `).join('') : '';

        const featuredHtml = item.featured ? `
            <div class="absolute top-4 right-4 bg-yellow-500/20 backdrop-blur-md rounded-full p-1.5 text-accent border border-accent/20">
                <i data-lucide="flame" class="animate-pulse" style="width: 14px; height: 14px;"></i>
            </div>
        ` : '';

        return `
            <div onclick="openProductModal('${item.id}')" class="rounded-3xl overflow-hidden bg-black/40 border border-white/5 shadow-inner hover:border-accent/20 transition-all duration-300 flex flex-col justify-between cursor-pointer" style="opacity: 0; transform: translateY(15px); animation: fadeIn 0.4s ease forwards;">
                <div class="relative h-48 sm:h-56 overflow-hidden">
                    <img src="${item.image}" alt="${escapeHtml(item.name)}" class="w-full h-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div class="absolute top-4 left-4 flex flex-wrap gap-1.5 z-10">${tagsHtml}</div>
                    ${featuredHtml}
                </div>
                <div class="p-5 flex-1 flex flex-col justify-between">
                    <div>
                        <h3 class="text-lg md:text-xl font-display font-bold text-white tracking-tight">${escapeHtml(item.name)}</h3>
                        <p class="text-xs text-muted leading-relaxed mt-2 min-h-[44px]">${escapeHtml(item.description)}</p>
                    </div>
                    <div class="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                        <div>
                            <span class="text-[10px] text-muted block uppercase tracking-wider">a partir de</span>
                            <span class="text-lg font-bold text-white font-mono">R$ ${item.basePrice}</span>
                        </div>
                        <button onclick="event.stopPropagation(); openProductModal('${item.id}')" class="bg-white hover:bg-accent text-black px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition flex items-center gap-1 active:scale-95">
                            <i data-lucide="plus" style="width: 14px; height: 14px; stroke-width: 2.5px;"></i>
                            <span>Adicionar</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    lucide.createIcons();
}

function filterMenu(categoryName) {
    currentCategory = categoryName;

    const tabs = document.querySelectorAll('#category-tabs button');
    tabs.forEach(btn => {
        const cat = btn.getAttribute('data-category');
        if (cat === categoryName) {
            btn.className = "px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all bg-accent text-black shadow-lg";
        } else {
            btn.className = "px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all bg-white/5 text-muted hover:bg-white/10 hover:text-white";
        }
    });

    renderMenu();
}

// -------------------------------------------------------------
// 6. DEPOIMENTOS
// -------------------------------------------------------------
function renderTestimonials() {
    const grid = document.getElementById('testimonials-grid');
    if (!grid) return;

    grid.innerHTML = INITIAL_TESTIMONIALS.map(test => {
        let starsHtml = '';
        for (let i = 0; i < test.rating; i++) {
            starsHtml += '<i data-lucide="star" class="text-accent fill-accent" style="width: 14px; height: 14px; display:inline-block; margin-right:2px;"></i>';
        }

        return `
            <div class="glass p-6 md:p-8 rounded-3xl flex flex-col justify-between hover:border-white/10 transition-colors" style="opacity: 0; transform: translateY(15px); animation: fadeIn 0.4s ease forwards;">
                <div>
                    <div class="flex gap-1 text-accent mb-4">${starsHtml}</div>
                    <p class="italic text-white/95 text-xs md:text-sm leading-relaxed mb-6 font-display">"${escapeHtml(test.text)}"</p>
                </div>
                <div class="flex items-center gap-3.5 pt-4 border-t border-white/5">
                    <div class="w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold font-mono text-sm border border-accent/10 select-none">
                        ${escapeHtml(test.avatarInitials)}
                    </div>
                    <div>
                        <h4 class="font-bold text-xs md:text-sm text-white">${escapeHtml(test.name)}</h4>
                        <p class="text-[11px] text-muted">${escapeHtml(test.role)}</p>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    lucide.createIcons();
}

// -------------------------------------------------------------
// 7. UTILITÁRIO — PROTEÇÃO CONTRA XSS
// -------------------------------------------------------------
function escapeHtml(text) {
    if (typeof text !== 'string') return '';
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// -------------------------------------------------------------
// 8. MODAL CUSTOMIZADOR
// -------------------------------------------------------------
function openProductModal(productId) {
    const item = MENU_ITEMS.find(p => p.id === productId);
    if (!item) return;

    currentSelectedItem = item;
    modalOptions = { size: 'grande', crust: 'tradicional', quantity: 1, notes: '' };

    document.getElementById('modal-image').src = item.image;
    document.getElementById('modal-image').alt = item.name;
    document.getElementById('modal-category-badge').textContent = item.category;
    document.getElementById('modal-title').textContent = item.name;
    document.getElementById('modal-description').textContent = item.description;
    document.getElementById('modal-notes').value = '';

    const isBeverage = item.category === 'bebidas';
    const pizzaOptionsBlock = document.getElementById('pizza-only-options');

    if (isBeverage) {
        pizzaOptionsBlock.classList.add('hidden');
    } else {
        pizzaOptionsBlock.classList.remove('hidden');
        document.getElementById('media-price-label').textContent = `R$ ${Math.round(item.basePrice * 0.85)}`;
        document.getElementById('grande-price-label').textContent = `R$ ${item.basePrice}`;
        updateModalSelectionUI();
    }

    updateModalPriceValue();

    const modal = document.getElementById('customize-modal');
    const container = document.getElementById('modal-container');

    modal.classList.remove('hidden');
    document.body.classList.add('modal-open');

    setTimeout(() => {
        modal.classList.remove('opacity-0');
        container.classList.remove('scale-95');
    }, 10);
}

function closeProductModal() {
    const modal = document.getElementById('customize-modal');
    const container = document.getElementById('modal-container');

    modal.classList.add('opacity-0');
    container.classList.add('scale-95');

    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.classList.remove('modal-open');
        currentSelectedItem = null;
    }, 300);
}

function setPizzaSize(sizeName) {
    modalOptions.size = sizeName;
    updateModalSelectionUI();
    updateModalPriceValue();
}

function setPizzaCrust(crustName) {
    modalOptions.crust = crustName;
    updateModalSelectionUI();
    updateModalPriceValue();
}

function adjustQuantity(direction) {
    let next = modalOptions.quantity + direction;
    if (next < 1) next = 1;
    modalOptions.quantity = next;
    document.getElementById('modal-quantity').textContent = next;
    updateModalPriceValue();
}

function updateModalPriceValue() {
    if (!currentSelectedItem) return;

    let total = currentSelectedItem.basePrice;

    if (currentSelectedItem.category !== 'bebidas') {
        if (modalOptions.size === 'media') total = Math.round(total * 0.85);
        if (modalOptions.crust === 'catupiry') total += 15;
        else if (modalOptions.crust === 'gorgonzola') total += 20;
    }

    const finalPrice = total * modalOptions.quantity;
    document.getElementById('modal-total-display').textContent = finalPrice;
}

function updateModalSelectionUI() {
    const btnMedia = document.getElementById('size-btn-media');
    const btnGrande = document.getElementById('size-btn-grande');

    if (modalOptions.size === 'media') {
        btnMedia.className = BTN_ACTIVE;
        btnMedia.querySelector('i').classList.remove('hidden');
        btnGrande.className = BTN_INACTIVE;
        btnGrande.querySelector('i').classList.add('hidden');
    } else {
        btnGrande.className = BTN_ACTIVE;
        btnGrande.querySelector('i').classList.remove('hidden');
        btnMedia.className = BTN_INACTIVE;
        btnMedia.querySelector('i').classList.add('hidden');
    }

    ['tradicional', 'catupiry', 'gorgonzola'].forEach(crustName => {
        const btn = document.getElementById(`crust-btn-${crustName}`);
        btn.className = modalOptions.crust === crustName ? BTN_CRUST_ACTIVE : BTN_CRUST_INACTIVE;
    });
}

// -------------------------------------------------------------
// 9. CARRINHO
// -------------------------------------------------------------
function confirmAddToCart() {
    if (!currentSelectedItem) return;

    const notesInput = document.getElementById('modal-notes').value.trim();
    modalOptions.notes = notesInput;

    const uniqueInstanceId = `${currentSelectedItem.id}-${modalOptions.size}-${modalOptions.crust}-${Date.now()}`;

    let unitPrice = currentSelectedItem.basePrice;
    if (currentSelectedItem.category !== 'bebidas') {
        if (modalOptions.size === 'media') unitPrice = Math.round(unitPrice * 0.85);
        if (modalOptions.crust === 'catupiry') unitPrice += 15;
        else if (modalOptions.crust === 'gorgonzola') unitPrice += 20;
    }

    const calculatedTotalPrice = unitPrice * modalOptions.quantity;

    // Verifica item idêntico (mesmo produto, tamanho, borda e nota)
    const existingIndex = cart.findIndex(item =>
        item.menuItem.id === currentSelectedItem.id &&
        item.size === modalOptions.size &&
        item.crust === modalOptions.crust &&
        item.customNotes === notesInput
    );

    if (existingIndex > -1) {
        cart[existingIndex].quantity += modalOptions.quantity;
        cart[existingIndex].totalPrice += calculatedTotalPrice;
    } else {
        cart.push({
            id: uniqueInstanceId,
            menuItem: currentSelectedItem,
            size: modalOptions.size,
            crust: modalOptions.crust,
            quantity: modalOptions.quantity,
            customNotes: notesInput,
            unitPrice: unitPrice,
            totalPrice: calculatedTotalPrice
        });
    }

    closeProductModal();
    updateCartDOM();
    toggleCartDrawer(true);
}

function updateCartDOM() {
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = cart.reduce((acc, item) => acc + item.totalPrice, 0);

    const counter = document.getElementById('cart-counter');
    if (totalCount > 0) {
        counter.textContent = totalCount;
        counter.classList.remove('hidden');
    } else {
        counter.classList.add('hidden');
    }

    const floatCart = document.getElementById('floating-cart');
    if (totalCount > 0) {
        document.getElementById('floating-cart-counter').textContent = totalCount;
        document.getElementById('floating-cart-total').textContent = subtotal;
        floatCart.classList.remove('hidden');
    } else {
        floatCart.classList.add('hidden');
    }

    document.getElementById('drawer-badge').textContent = totalCount;
    renderCartDrawerBody();
}

function renderCartDrawerBody() {
    const drawerBody = document.getElementById('drawer-body');
    const drawerFooter = document.getElementById('drawer-footer');
    if (!drawerBody) return;

    if (cart.length === 0) {
        drawerBody.innerHTML = `
            <div class="h-full flex flex-col items-center justify-center text-center py-16">
                <div class="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 text-zinc-600">
                    <i data-lucide="shopping-bag" style="width: 28px; height: 28px;"></i>
                </div>
                <h4 class="text-lg font-semibold text-white">Sua sacola está vazia</h4>
                <p class="text-xs text-muted max-w-[240px] mt-2">Adicione algumas de nossas magníficas pizzas para começar.</p>
            </div>
        `;
        drawerFooter.classList.add('hidden');
        lucide.createIcons();
        return;
    }

    drawerFooter.classList.remove('hidden');
    document.getElementById('drawer-subtotal').textContent = cart.reduce((acc, i) => acc + i.totalPrice, 0);

    if (currentDrawerStep === 'cart') {
        renderCartItems(drawerBody);
        document.getElementById('drawer-actions-step1').classList.remove('hidden');
        document.getElementById('drawer-actions-step2').classList.add('hidden');
    } else {
        renderCheckoutForm(drawerBody);
        document.getElementById('drawer-actions-step1').classList.add('hidden');
        document.getElementById('drawer-actions-step2').classList.remove('hidden');
    }

    lucide.createIcons();
}

function renderCartItems(drawerBody) {
    let itemsHtml = `<div class="space-y-4">`;

    cart.forEach(item => {
        const isBeverage = item.menuItem.category === 'bebidas';
        const optionDetailsHtml = !isBeverage ? `
            <div class="text-[11px] text-muted space-y-0.5 mt-1">
                <p>Tamanho: ${item.size === 'media' ? 'Média 30cm' : 'Grande 35cm'}</p>
                <p>Borda: ${item.crust === 'tradicional' ? 'Crocante clássica' : item.crust === 'catupiry' ? 'Catupiry' : 'Gorgonzola Dolce'}</p>
            </div>
        ` : '';

        const notesHtml = item.customNotes ? `
            <p class="text-[11px] text-amber-500 italic mt-1.5">📌 "${escapeHtml(item.customNotes)}"</p>
        ` : '';

        itemsHtml += `
            <div class="p-4 rounded-2xl bg-white/5 border border-white/5 flex justify-between items-start gap-3 hover:border-white/10 transition">
                <div class="flex-1">
                    <div class="flex justify-between items-start">
                        <h5 class="font-semibold text-sm text-white">${escapeHtml(item.menuItem.name)}</h5>
                        <span class="text-xs font-bold text-accent font-mono ml-2">R$ ${item.totalPrice}</span>
                    </div>
                    ${optionDetailsHtml}
                    ${notesHtml}
                    <div class="flex items-center justify-between mt-3 pt-2 border-t border-white/5">
                        <div class="flex items-center gap-2 bg-black/30 rounded-full px-2.5 py-1 text-xs">
                            <button onclick="modifyCartItemQty('${item.id}', -1)" class="text-muted hover:text-white px-1 font-semibold">-</button>
                            <span class="text-white font-bold w-4 text-center">${item.quantity}</span>
                            <button onclick="modifyCartItemQty('${item.id}', 1)" class="text-muted hover:text-white px-1 font-semibold">+</button>
                        </div>
                        <button onclick="removeCartItem('${item.id}')" class="text-zinc-600 hover:text-rose-400 p-1 transition" title="Excluir item">
                            <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    itemsHtml += `</div>`;
    drawerBody.innerHTML = itemsHtml;
}

function renderCheckoutForm(drawerBody) {
    const nameVal = document.getElementById('form-name')?.value || '';
    const phoneVal = document.getElementById('form-phone')?.value || '';
    const methodVal = document.querySelector('input[name="delivery-method"]:checked')?.value || 'delivery';
    const addrVal = document.getElementById('form-address')?.value || '';
    const paysVal = document.querySelector('input[name="payment-method"]:checked')?.value || 'pix';
    const changeValue = document.getElementById('form-change')?.value || '';

    drawerBody.innerHTML = `
        <div class="space-y-5">
            <div class="space-y-3">
                <h4 class="text-xs font-bold uppercase text-accent tracking-widest border-b border-white/5 pb-1">Como prefere receber?</h4>
                <div class="grid grid-cols-2 gap-3">
                    <label class="p-3 rounded-xl border flex flex-col items-center justify-center gap-2 cursor-pointer transition select-none ${methodVal === 'delivery' ? 'border-accent bg-accent/10 text-white' : 'border-white/5 bg-white/5 text-muted hover:border-white/10'}">
                        <input type="radio" name="delivery-method" value="delivery" ${methodVal === 'delivery' ? 'checked' : ''} class="hidden" onchange="onDeliveryMethodChange(this.value)">
                        <i data-lucide="bike" style="width: 18px; height: 18px;"></i>
                        <span class="text-xs">Entrega (Delivery)</span>
                    </label>
                    <label class="p-3 rounded-xl border flex flex-col items-center justify-center gap-2 cursor-pointer transition select-none ${methodVal === 'pickup' ? 'border-accent bg-accent/10 text-white' : 'border-white/5 bg-white/5 text-muted hover:border-white/10'}">
                        <input type="radio" name="delivery-method" value="pickup" ${methodVal === 'pickup' ? 'checked' : ''} class="hidden" onchange="onDeliveryMethodChange(this.value)">
                        <i data-lucide="shopping-bag" style="width: 18px; height: 18px;"></i>
                        <span class="text-xs">Retirar no Balcão</span>
                    </label>
                </div>
            </div>
            <div class="space-y-3.5">
                <h4 class="text-xs font-bold uppercase text-accent tracking-widest border-b border-white/5 pb-1">Seus dados de contato</h4>
                <div>
                    <label class="block text-[10px] font-semibold text-muted uppercase tracking-wider mb-1">Nome Completo</label>
                    <input required id="form-name" type="text" placeholder="Ex: Rodrigo Mendes" value="${escapeHtml(nameVal)}" class="w-full bg-white/5 border border-white/5 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-accent/30 transition placeholder:text-zinc-600">
                </div>
                <div>
                    <label class="block text-[10px] font-semibold text-muted uppercase tracking-wider mb-1">WhatsApp de Contato</label>
                    <input required id="form-phone" type="tel" placeholder="Ex: (11) 99999-9999" value="${escapeHtml(phoneVal)}" class="w-full bg-white/5 border border-white/5 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-accent/30 transition placeholder:text-zinc-600">
                </div>
                <div id="address-block" class="${methodVal === 'pickup' ? 'hidden' : ''}">
                    <label class="block text-[10px] font-semibold text-muted uppercase tracking-wider mb-1">Endereço Completo</label>
                    <textarea id="form-address" rows="2" placeholder="Ex: Avenida Paulista, 1000 - Apto 32" class="w-full bg-white/5 border border-white/5 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-accent/30 transition placeholder:text-zinc-600 resize-none">${escapeHtml(addrVal)}</textarea>
                </div>
            </div>
            <div class="space-y-3.5">
                <h4 class="text-xs font-bold uppercase text-accent tracking-widest border-b border-white/5 pb-1">Forma de Pagamento</h4>
                <div class="grid grid-cols-2 gap-2 text-xs">
                    <label class="p-2.5 rounded-xl border flex items-center gap-2 cursor-pointer transition ${paysVal === 'pix' ? 'border-accent bg-accent/10 text-white' : 'border-white/5 bg-white/5 text-muted hover:border-white/10'}">
                        <input type="radio" name="payment-method" value="pix" ${paysVal === 'pix' ? 'checked' : ''} class="hidden" onchange="onPaymentMethodChange(this.value)">
                        <span class="w-2 h-2 rounded-full ${paysVal === 'pix' ? 'bg-accent' : 'bg-zinc-700'}"></span>
                        <span>PIX</span>
                    </label>
                    <label class="p-2.5 rounded-xl border flex items-center gap-2 cursor-pointer transition ${paysVal === 'cartao_credito' ? 'border-accent bg-accent/10 text-white' : 'border-white/5 bg-white/5 text-muted hover:border-white/10'}">
                        <input type="radio" name="payment-method" value="cartao_credito" ${paysVal === 'cartao_credito' ? 'checked' : ''} class="hidden" onchange="onPaymentMethodChange(this.value)">
                        <i data-lucide="credit-card" style="width: 12px; height: 12px;"></i>
                        <span>Crédito</span>
                    </label>
                    <label class="p-2.5 rounded-xl border flex items-center gap-2 cursor-pointer transition ${paysVal === 'cartao_debito' ? 'border-accent bg-accent/10 text-white' : 'border-white/5 bg-white/5 text-muted hover:border-white/10'}">
                        <input type="radio" name="payment-method" value="cartao_debito" ${paysVal === 'cartao_debito' ? 'checked' : ''} class="hidden" onchange="onPaymentMethodChange(this.value)">
                        <i data-lucide="credit-card" style="width: 12px; height: 12px;"></i>
                        <span>Débito</span>
                    </label>
                    <label class="p-2.5 rounded-xl border flex items-center gap-2 cursor-pointer transition ${paysVal === 'dinheiro' ? 'border-accent bg-accent/10 text-white' : 'border-white/5 bg-white/5 text-muted hover:border-white/10'}">
                        <input type="radio" name="payment-method" value="dinheiro" ${paysVal === 'dinheiro' ? 'checked' : ''} class="hidden" onchange="onPaymentMethodChange(this.value)">
                        <span class="font-bold text-accent">$</span>
                        <span>Dinheiro</span>
                    </label>
                </div>
                <div id="change-block" class="${paysVal !== 'dinheiro' ? 'hidden' : ''}">
                    <label class="block text-[10px] font-semibold text-muted uppercase tracking-wider mb-1">Troco para quanto?</label>
                    <input id="form-change" type="number" placeholder="Ex: 100" value="${escapeHtml(changeValue)}" class="w-full bg-white/5 border border-white/5 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-accent/30 transition placeholder:text-zinc-600">
                </div>
            </div>
        </div>
    `;
}

function toggleCartDrawer(forceState = null) {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('drawer-overlay');
    const container = document.getElementById('drawer-container');

    const currentlyHidden = drawer.classList.contains('hidden');
    const show = forceState !== null ? forceState : currentlyHidden;

    if (show) {
        drawer.classList.remove('hidden');
        document.body.classList.add('modal-open');
        setTimeout(() => {
            overlay.classList.remove('opacity-0');
            container.classList.remove('translate-x-full');
        }, 10);
    } else {
        overlay.classList.add('opacity-0');
        container.classList.add('translate-x-full');
        setTimeout(() => {
            drawer.classList.add('hidden');
            document.body.classList.remove('modal-open');
        }, 300);
    }
}

function modifyCartItemQty(itemId, amount) {
    const index = cart.findIndex(item => item.id === itemId);
    if (index === -1) return;

    const item = cart[index];
    const newQty = item.quantity + amount;

    if (newQty <= 0) {
        cart.splice(index, 1);
    } else {
        item.quantity = newQty;
        item.totalPrice = item.unitPrice * newQty;
    }

    updateCartDOM();
}

function removeCartItem(itemId) {
    const index = cart.findIndex(item => item.id === itemId);
    if (index !== -1) cart.splice(index, 1);
    updateCartDOM();
}

function goToCheckoutStep() {
    // CORREÇÃO: valida carrinho vazio antes de avançar
    if (cart.length === 0) return;
    currentDrawerStep = 'checkout';
    renderCartDrawerBody();
    document.getElementById('drawer-header-title').textContent = 'Finalizar Pedido';
}

function goToCartStep() {
    currentDrawerStep = 'cart';
    renderCartDrawerBody();
    document.getElementById('drawer-header-title').textContent = 'Seu Pedido';
}

// CORREÇÃO: manipula o DOM diretamente, sem re-renderizar tudo (evita loop infinito)
function onDeliveryMethodChange(method) {
    const block = document.getElementById('address-block');
    if (block) {
        block.classList.toggle('hidden', method === 'pickup');
    }
}

// CORREÇÃO: manipula o DOM diretamente, sem re-renderizar tudo (evita loop infinito)
function onPaymentMethodChange(method) {
    const block = document.getElementById('change-block');
    if (block) {
        block.classList.toggle('hidden', method !== 'dinheiro');
    }
}

// -------------------------------------------------------------
// 10. WHATSAPP
// -------------------------------------------------------------
function submitOrderToWhatsApp() {
    const name = document.getElementById('form-name').value.trim();
    const phone = document.getElementById('form-phone').value.trim();
    const isDelivery = document.querySelector('input[name="delivery-method"]:checked').value === 'delivery';
    const address = isDelivery ? document.getElementById('form-address').value.trim() : '';
    const payment = document.querySelector('input[name="payment-method"]:checked').value;
    const change = payment === 'dinheiro' ? document.getElementById('form-change').value : '';

    if (!name || !phone) {
        alert("Por favor, preencha as informações de Nome e WhatsApp!");
        return;
    }
    if (isDelivery && !address) {
        alert("Por favor, informe seu Endereço Completo para realizarmos a entrega!");
        return;
    }

    const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);

    let orderHeader = `*🍕 ${CONFIG.companyName.toUpperCase()} - NOVO PEDIDO*\n━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    let customerInfo = `👤 *Cliente:* ${name}\n📱 *WhatsApp:* ${phone}\n📍 *Como receber:* ${isDelivery ? '🚗 Entrega (Delivery)' : '🏪 Retirar na Pizzaria'}\n`;
    if (isDelivery) customerInfo += `🏠 *Endereço:* ${address}\n`;

    let itemsText = `\n📦 *ITENS DO PEDIDO:*\n`;
    cart.forEach((item, index) => {
        const isBeb = item.menuItem.category === 'bebidas';
        const sizeLabel = item.size === 'media' ? 'Média (30cm)' : 'Grande (35cm)';
        // CORREÇÃO: "Dolce" em vez de "Dolci"
        const crustLabel = item.crust === 'tradicional' ? 'Massa Crocante' : item.crust === 'catupiry' ? 'Borda Catupiry' : 'Borda Gorgonzola Dolce';

        itemsText += `${index + 1}. *${item.quantity}x ${item.menuItem.name}*\n`;
        if (!isBeb) itemsText += `   _Tamanho: ${sizeLabel} | Borda: ${crustLabel}_\n`;
        if (item.customNotes) itemsText += `   _Notas: "${item.customNotes}"_\n`;
        itemsText += `   _Valor: R$ ${item.totalPrice}_\n\n`;
    });

    let paymentLabel = { pix: 'PIX', cartao_credito: 'Cartão de Crédito (na entrega)', cartao_debito: 'Cartão de Débito (na entrega)', dinheiro: 'Dinheiro' }[payment] || payment;
    const changeText = (payment === 'dinheiro' && change) ? ` (Troco para R$ ${change})` : '';

    const orderSummary = `━━━━━━━━━━━━━━━━━━━━━━━━\n💳 *Forma de Pagamento:* ${paymentLabel}${changeText}\n💵 *Total Final:* *R$ ${totalAmount}*\n━━━━━━━━━━━━━━━━━━━━━━━━\n\n_Pedido enviado pelo site da ${CONFIG.companyName}._`;

    const fullMessage = encodeURIComponent(orderHeader + customerInfo + itemsText + orderSummary);
    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${fullMessage}`, '_blank');

    cart = [];
    currentDrawerStep = 'cart';
    updateCartDOM();
    toggleCartDrawer(false);

    alert("Pedido enviado! Verifique sua janela do WhatsApp.");
}

// -------------------------------------------------------------
// 11. MODAL DE DEPOIMENTOS
// -------------------------------------------------------------
function openReviewModal() {
    const md = document.getElementById('review-modal');
    const container = document.getElementById('review-modal-container');

    document.getElementById('review-form-content').classList.remove('hidden');
    document.getElementById('review-success-content').classList.add('hidden');

    formSelectedRating = 5;
    setFormStars(5);

    document.getElementById('review-name').value = '';
    document.getElementById('review-role').value = '';
    document.getElementById('review-text').value = '';

    md.classList.remove('hidden');
    document.body.classList.add('modal-open');

    setTimeout(() => {
        md.classList.remove('opacity-0');
        container.classList.remove('scale-95');
    }, 10);
}

function closeReviewModal() {
    const md = document.getElementById('review-modal');
    const container = document.getElementById('review-modal-container');

    md.classList.add('opacity-0');
    container.classList.add('scale-95');

    setTimeout(() => {
        md.classList.add('hidden');
        document.body.classList.remove('modal-open');
    }, 300);
}

function setFormStars(rating) {
    formSelectedRating = rating;
    const buttons = document.querySelectorAll('#star-selector button');

    buttons.forEach((btn, index) => {
        const starIcon = btn.querySelector('i');
        if (index < rating) {
            starIcon.classList.add('fill-accent', 'text-accent');
            starIcon.classList.remove('text-zinc-700');
        } else {
            starIcon.classList.remove('fill-accent', 'text-accent');
            starIcon.classList.add('text-zinc-700');
        }
    });
}

function submitReview(e) {
    e.preventDefault();

    const name = document.getElementById('review-name').value.trim();
    const roleInput = document.getElementById('review-role').value.trim();
    const text = document.getElementById('review-text').value.trim();

    if (!name || !text) return;

    // CORREÇÃO: limite de 400 caracteres no texto
    if (text.length > 400) {
        alert("O depoimento deve ter no máximo 400 caracteres.");
        return;
    }

    let initials = name.split(' ').map(part => part[0]).join('').toUpperCase().slice(0, 2);
    if (!initials) initials = 'CE';

    INITIAL_TESTIMONIALS.unshift({
        id: `custom-review-${Date.now()}`,
        name: name,
        role: roleInput || "Cliente Satisfeito",
        text: text,
        rating: formSelectedRating,
        avatarInitials: initials
    });

    renderTestimonials();

    document.getElementById('review-form-content').classList.add('hidden');
    document.getElementById('review-success-content').classList.remove('hidden');

    setTimeout(() => closeReviewModal(), 2000);
}

// -------------------------------------------------------------
// 12. SCROLL E ANIMAÇÕES
// -------------------------------------------------------------
function setupScrollEffects() {
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('py-2.5', 'border-white/10', 'shadow-xl');
            nav.classList.remove('py-4');
        } else {
            nav.classList.add('py-4');
            nav.classList.remove('py-2.5', 'border-white/10', 'shadow-xl');
        }
    });
}

function initGsapAnimations() {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline();
        tl.to("#hero-img", { scale: 1.05, duration: 4, ease: "power1.out" })
          .from("section h1", { y: 30, opacity: 0, duration: 1, ease: "power3.out" }, "-=3.5")
          .from("section p", { y: 20, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=2.8")
          .from("section a, section button", { y: 15, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }, "-=2.3");

        gsap.from(".bento-card", {
            scrollTrigger: { trigger: "#differentials", start: "top 75%", toggleActions: "play none none none" },
            scale: 0.95, opacity: 0, duration: 0.8, stagger: 0.15, ease: "back.out(1.5)"
        });

        gsap.from("#about img", {
            scrollTrigger: { trigger: "#about", start: "top 80%" },
            x: -30, opacity: 0, duration: 1, ease: "power2.out"
        });

        // CORREÇÃO: removido o "-=0.8" inválido fora de timeline
        gsap.from("#about .space-y-6", {
            scrollTrigger: { trigger: "#about", start: "top 80%" },
            x: 30, opacity: 0, duration: 1, ease: "power2.out"
        });
    }
}