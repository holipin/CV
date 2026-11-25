import { jsPDF } from 'jspdf';
import { RESUME_DATA } from '../data/portfolioData';
import { EXPERIENCES } from '../data/portfolioExperienceData';

/**
 * Normalizes text so built-in PDF Helvetica font renders cleanly without missing glyph artifacts.
 */
function sanitizePdfText(text: string): string {
    return text
        .replace(/[\u2018\u2019]/g, "'")
        .replace(/[\u201C\u201D]/g, '"')
        .replace(/[\u2013\u2014]/g, '-')
        .replace(/[^\x20-\x7E\xA0-\xFF\u2022]/g, '')
        .trim();
}

export function exportResumePdf(): string {
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const marginX = 16;
    const marginTop = 16;
    const marginBottom = 16;
    const contentWidth = pageWidth - marginX * 2;
    let y = marginTop;

    const ensureSpace = (neededMm: number) => {
        if (y + neededMm > pageHeight - marginBottom) {
            doc.addPage();
            y = marginTop;
        }
    };

    const drawSectionHeading = (title: string) => {
        ensureSpace(14);
        y += 3;
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(225, 29, 72); // Rose accent
        doc.text(title.toUpperCase(), marginX, y);
        y += 1.8;
        doc.setDrawColor(226, 232, 240);
        doc.setLineWidth(0.35);
        doc.line(marginX, y, pageWidth - marginX, y);
        y += 4.5;
    };

    const drawWrappedText = (
        text: string,
        x: number,
        maxWidth: number,
        lineHeight: number,
        options?: {
            fontStyle?: 'normal' | 'bold' | 'italic';
            fontSize?: number;
            color?: [number, number, number];
        }
    ) => {
        const clean = sanitizePdfText(text);
        if (!clean) return;

        doc.setFont('helvetica', options?.fontStyle ?? 'normal');
        doc.setFontSize(options?.fontSize ?? 9.5);
        const [r, g, b] = options?.color ?? [51, 65, 85];
        doc.setTextColor(r, g, b);

        const lines = doc.splitTextToSize(clean, maxWidth) as string[];
        for (const line of lines) {
            ensureSpace(lineHeight + 1);
            doc.text(line, x, y);
            y += lineHeight;
        }
    };

    const drawBulletItem = (text: string, indent = 3.5, fontSize = 9, lineHeight = 4.2) => {
        const clean = sanitizePdfText(text);
        if (!clean) return;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(fontSize);
        const bulletX = marginX + 1;
        const textX = marginX + indent + 1.5;
        const maxWidth = contentWidth - indent - 1.5;
        const lines = doc.splitTextToSize(clean, maxWidth) as string[];

        ensureSpace(lines.length * lineHeight + 1);

        doc.setTextColor(225, 29, 72);
        doc.text('•', bulletX, y);

        doc.setTextColor(51, 65, 85);
        lines.forEach((line, idx) => {
            if (idx > 0) {
                ensureSpace(lineHeight + 1);
            }
            doc.text(line, textX, y);
            y += lineHeight;
        });
        y += 0.6;
    };

    // --- DOCUMENT HEADER ---
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(19);
    doc.setTextColor(15, 23, 42);
    doc.text(sanitizePdfText(RESUME_DATA.name).toUpperCase(), marginX, y);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(225, 29, 72);
    doc.text(sanitizePdfText(RESUME_DATA.title), pageWidth - marginX, y, { align: 'right' });

    y += 5.5;

    // Contact line 1
    const contactPrimary = [
        RESUME_DATA.contact.email,
        RESUME_DATA.contact.phone,
        RESUME_DATA.contact.location,
    ]
        .map(sanitizePdfText)
        .filter(Boolean)
        .join('  •  ');

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);
    doc.text(contactPrimary, marginX, y);
    y += 4.2;

    // Contact line 2 (Links)
    const links = [
        { label: 'Portfolio', url: RESUME_DATA.contact.portfolio },
        { label: 'LinkedIn', url: RESUME_DATA.contact.linkedin },
        { label: 'GitHub', url: RESUME_DATA.contact.github },
    ].filter((item) => Boolean(item.url));

    let linkX = marginX;
    doc.setFontSize(8.2);
    links.forEach((link, idx) => {
        if (idx > 0) {
            doc.setTextColor(148, 163, 184);
            doc.text('  |  ', linkX, y);
            linkX += doc.getTextWidth('  |  ');
        }
        const text = `${link.label}: ${sanitizePdfText(link.url)}`;
        doc.setTextColor(2, 132, 199);
        doc.textWithLink(text, linkX, y, { url: link.url });
        linkX += doc.getTextWidth(text);
    });

    y += 3.5;
    doc.setDrawColor(225, 29, 72);
    doc.setLineWidth(0.7);
    doc.line(marginX, y, pageWidth - marginX, y);
    y += 4;

    // --- EXECUTIVE PROFILE ---
    drawSectionHeading('Executive Profile');
    drawWrappedText(RESUME_DATA.summary, marginX, contentWidth, 4.5, {
        fontSize: 9.5,
        color: [30, 41, 59],
    });
    y += 1.5;

    // --- CORE TECHNICAL COMPETENCIES ---
    drawSectionHeading('Core Technical Competencies');
    RESUME_DATA.coreSkills.forEach((skill) => {
        drawBulletItem(skill, 3, 8.8, 4.1);
    });
    y += 1;

    // --- PROFESSIONAL EXPERIENCE ---
    drawSectionHeading('Professional Experience');
    EXPERIENCES.forEach((exp, expIdx) => {
        ensureSpace(22);

        // Role @ Company + Period
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(15, 23, 42);
        const roleTitle = sanitizePdfText(`${exp.role} @ ${exp.company}`);
        doc.text(roleTitle, marginX, y);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(100, 116, 139);
        const metaRight = sanitizePdfText(`${exp.period}`);
        doc.text(metaRight, pageWidth - marginX, y, { align: 'right' });

        y += 4.2;

        // Location & Employment Type
        doc.setFont('helvetica', 'italic');
        doc.setFontSize(8.3);
        doc.setTextColor(100, 116, 139);
        doc.text(sanitizePdfText(`${exp.location} • ${exp.type}`), marginX, y);
        y += 4.3;

        // Summary
        drawWrappedText(exp.summary, marginX, contentWidth, 4.2, {
            fontSize: 9,
            color: [51, 65, 85],
        });
        y += 1;

        // Deliverables
        exp.keyDeliverables.forEach((item) => {
            drawBulletItem(item, 3, 8.7, 4.0);
        });

        // Metrics highlight line
        if (exp.metrics && exp.metrics.length > 0) {
            const metricsLine = exp.metrics
                .map((m) => `${sanitizePdfText(m.label)}: ${sanitizePdfText(m.value)}`)
                .join('  |  ');
            drawWrappedText(`Impact: ${metricsLine}`, marginX + 3.5, contentWidth - 3.5, 4.0, {
                fontStyle: 'bold',
                fontSize: 8.2,
                color: [71, 85, 105],
            });
        }

        if (expIdx < EXPERIENCES.length - 1) {
            y += 3.5;
        }
    });

    // --- EDUCATION ---
    drawSectionHeading('Education');
    RESUME_DATA.education.forEach((edu) => {
        ensureSpace(14);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(15, 23, 42);
        doc.text(sanitizePdfText(edu.degree), marginX, y);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(100, 116, 139);
        doc.text(sanitizePdfText(edu.period), pageWidth - marginX, y, { align: 'right' });
        y += 4.2;

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.8);
        doc.setTextColor(225, 29, 72);
        doc.text(sanitizePdfText(edu.institution), marginX, y);
        y += 4.2;

        if (edu.notes) {
            drawWrappedText(edu.notes, marginX, contentWidth, 4.0, {
                fontSize: 8.6,
                color: [71, 85, 105],
            });
        }
        y += 1.5;
    });

    // --- PROFESSIONAL CERTIFICATIONS ---
    drawSectionHeading('Professional Certifications');
    RESUME_DATA.certifications.forEach((cert) => {
        drawBulletItem(cert, 3, 8.8, 4.1);
    });

    // --- PAGE FOOTERS ---
    const totalPages = doc.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7.8);
        doc.setTextColor(148, 163, 184);
        doc.text(
            `${sanitizePdfText(RESUME_DATA.name)} — Executive Resume`,
            marginX,
            pageHeight - 8
        );
        doc.text(
            `Page ${i} of ${totalPages}`,
            pageWidth - marginX,
            pageHeight - 8,
            { align: 'right' }
        );
    }

    const safeFileName = `${RESUME_DATA.name.replace(/[^a-zA-Z0-9]+/g, '_').replace(/^_|_$/g, '')}_Executive_CV.pdf`;
    doc.save(safeFileName);
    return safeFileName;
}
