namespace CSoftSmartRetailDesigner.Domain.Entities;

public class Project
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string StoreType { get; set; } = string.Empty;
    public double Area { get; set; }
    public decimal TotalCost { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;
}